import React, { useEffect, useState, useRef } from 'react'
import Matter from 'matter-js'

const STATIC_DENSITY = 15

interface WordItem {
  label: string
  color: string
  textColor: string
  logo?: string
}

const wordsToDisplay: WordItem[] = [
  // Languages & Frameworks
  { label: 'JavaScript', color: '#F7DF1E', textColor: '#000', logo: '/logos/javascript.svg' },
  { label: 'TypeScript', color: '#3178C6', textColor: '#fff', logo: '/logos/typescript.svg' },
  { label: 'React', color: '#23272F', textColor: '#61DAFB', logo: '/logos/react.svg' },
  { label: 'Next.js', color: '#000000', textColor: '#fff', logo: '/logos/nextjs.svg' },
  { label: 'Node.js', color: '#339933', textColor: '#fff', logo: '/logos/nodejs.svg' },
  { label: 'Rust', color: '#A72145', textColor: '#fff', logo: '/logos/rust.svg' },
  { label: 'Solidity', color: '#363636', textColor: '#fff', logo: '/logos/solidity.svg' },
  // Growth & GTM Tools
  { label: 'Clay', color: '#5B5FC7', textColor: '#fff' },
  { label: 'Apollo', color: '#4C6EF5', textColor: '#fff', logo: '/logos/apollo.svg' },
  { label: 'Instantly', color: '#5865F2', textColor: '#fff' },
  { label: 'N8N', color: '#EA4B71', textColor: '#fff', logo: '/logos/n8n.svg' },
  { label: 'Zapier', color: '#FF4A00', textColor: '#fff', logo: '/logos/zapier.svg' },
  { label: 'Make', color: '#6D00CC', textColor: '#fff', logo: '/logos/make.svg' },
  { label: 'HubSpot', color: '#FF7A59', textColor: '#fff', logo: '/logos/hubspot.svg' },
  // AI & Infrastructure
  { label: 'Claude', color: '#D97757', textColor: '#fff', logo: '/logos/claude.svg' },
  { label: 'AI Agents', color: '#10A37F', textColor: '#fff' },
  { label: 'Supabase', color: '#3ECF8E', textColor: '#000', logo: '/logos/supabase.svg' },
  { label: 'PostHog', color: '#F9BD2B', textColor: '#000', logo: '/logos/posthog.svg' },
  // Domains
  { label: 'Web3', color: '#F16822', textColor: '#fff', logo: '/logos/web3.svg' },
  { label: 'SaaS', color: '#2563EB', textColor: '#fff' },
  { label: 'RevOps', color: '#7C3AED', textColor: '#fff' },
  { label: 'PLG', color: '#059669', textColor: '#fff' },
  { label: 'Automation', color: '#DC2626', textColor: '#fff' },
  { label: 'GTM', color: '#edd86e', textColor: '#000' },
]

const PILL_HEIGHT = 36
const LOGO_SIZE = 16
const PILL_PADDING = 16
const LOGO_GAP = 6
const FONT = 'bold 13px "Roboto Mono", monospace'

const FallingWordsCanvas: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logosRef = useRef<Map<string, HTMLImageElement>>(new Map())
  const spawnWordsRef = useRef<(() => void) | null>(null)

  const [constraints, setConstraints] = useState<DOMRect | undefined>()
  const [scene, setScene] = useState<Matter.Render | undefined>()
  const [logosLoaded, setLogosLoaded] = useState(false)

  // Preload logos
  useEffect(() => {
    const logoEntries = wordsToDisplay.filter((w) => w.logo)
    let loaded = 0
    const total = logoEntries.length

    if (total === 0) {
      setLogosLoaded(true)
      return
    }

    logoEntries.forEach((word) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        logosRef.current.set(word.label, img)
        loaded++
        if (loaded >= total) setLogosLoaded(true)
      }
      img.onerror = () => {
        loaded++
        if (loaded >= total) setLogosLoaded(true)
      }
      img.src = word.logo!
    })
  }, [])

  useEffect(() => {
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Runner = Matter.Runner

    const engine = Engine.create({})
    const render = Render.create({
      element: boxRef.current!,
      engine: engine,
      canvas: canvasRef.current!,
      options: {
        background: 'transparent',
        wireframes: false,
      },
    })

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
        strokeStyle: 'black',
        lineWidth: 1,
      },
    })

    World.add(engine.world, [floor])

    Runner.run(engine)
    Render.run(render)

    setConstraints(boxRef.current?.getBoundingClientRect())
    setScene(render)

    return () => {
      Render.stop(render)
      Engine.clear(engine)
    }
  }, [])

  useEffect(() => {
    if (constraints && scene) {
      const { width, height } = constraints

      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height

      // @ts-expect-error - Matter.js untyped internals
      const floor = scene.engine.world.bodies[0]

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      })

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ])
    }
  }, [constraints, scene])

  useEffect(() => {
    if (scene && constraints && logosLoaded) {
      const { width } = constraints

      // Measure pill widths with a temp context
      const tempCanvas = document.createElement('canvas')
      const tempCtx = tempCanvas.getContext('2d')!
      tempCtx.font = FONT

      const spawnWords = () => {
        // Shuffle order for variety each round
        const shuffled = [...wordsToDisplay].sort(() => Math.random() - 0.5)

        for (let i = 0; i < shuffled.length; i++) {
          const word = shuffled[i]
          const hasLogo = logosRef.current.has(word.label)
          const textWidth = tempCtx.measureText(word.label).width
          const pillWidth = textWidth + PILL_PADDING * 2 + (hasLogo ? LOGO_SIZE + LOGO_GAP : 0)

          const wordBody = Matter.Bodies.rectangle(
            Math.random() * width,
            -60 * i - 50,
            pillWidth,
            PILL_HEIGHT,
            {
              label: word.label,
              chamfer: { radius: PILL_HEIGHT / 2 },
              render: {
                fillStyle: 'transparent',
                strokeStyle: 'transparent',
              },
            },
          )
          // @ts-expect-error - Matter.js untyped internals
          wordBody.brandColor = word.color
          // @ts-expect-error - Matter.js untyped internals
          wordBody.brandTextColor = word.textColor
          // @ts-expect-error - Matter.js untyped internals
          wordBody.pillWidth = pillWidth
          // @ts-expect-error - Matter.js untyped internals
          Matter.Composite.add(scene.engine.world, wordBody)
        }
      }

      // Store spawnWords on ref so handleClick can access it
      spawnWordsRef.current = spawnWords

      // Initial spawn — drop two rounds for a fuller canvas
      spawnWords()
      setTimeout(() => spawnWords(), 800)

      // Add more pills every 30 seconds (no clearing)
      const interval = setInterval(spawnWords, 30000)

      // Custom render loop
      Matter.Events.on(scene, 'afterRender', () => {
        const ctx = scene.context as CanvasRenderingContext2D
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // @ts-expect-error - Matter.js untyped internals
        for (const body of scene.engine.world.bodies) {
          if (body.label && body.label !== 'Body') {
            const pos = body.position
            const angle = body.angle
            const label = body.label
            const bgColor: string = body.brandColor || '#333'
            const textColor: string = body.brandTextColor || '#fff'
            const pillWidth: number = body.pillWidth || 80

            const halfW = pillWidth / 2
            const halfH = PILL_HEIGHT / 2
            const r = halfH

            ctx.save()
            ctx.translate(pos.x, pos.y)
            ctx.rotate(angle)

            // Draw rounded pill shape
            ctx.beginPath()
            ctx.moveTo(-halfW + r, -halfH)
            ctx.lineTo(halfW - r, -halfH)
            ctx.arcTo(halfW, -halfH, halfW, -halfH + r, r)
            ctx.lineTo(halfW, halfH - r)
            ctx.arcTo(halfW, halfH, halfW - r, halfH, r)
            ctx.lineTo(-halfW + r, halfH)
            ctx.arcTo(-halfW, halfH, -halfW, halfH - r, r)
            ctx.lineTo(-halfW, -halfH + r)
            ctx.arcTo(-halfW, -halfH, -halfW + r, -halfH, r)
            ctx.closePath()
            ctx.fillStyle = bgColor
            ctx.fill()

            // Set font for text measurement
            ctx.font = FONT

            // Draw logo + text or text only
            const logoImg = logosRef.current.get(label)

            if (logoImg) {
              const textWidth = ctx.measureText(label).width
              const contentWidth = LOGO_SIZE + LOGO_GAP + textWidth
              const startX = -contentWidth / 2

              ctx.drawImage(logoImg, startX, -LOGO_SIZE / 2, LOGO_SIZE, LOGO_SIZE)

              ctx.fillStyle = textColor
              ctx.textAlign = 'left'
              ctx.textBaseline = 'middle'
              ctx.fillText(label, startX + LOGO_SIZE + LOGO_GAP, 1)
            } else {
              ctx.fillStyle = textColor
              ctx.textAlign = 'center'
              ctx.textBaseline = 'middle'
              ctx.fillText(label, 0, 1)
            }

            ctx.restore()
          }
        }
      })

      return () => clearInterval(interval)
    }
  }, [scene, constraints, logosLoaded])

  const handleClick = () => {
    if (spawnWordsRef.current) {
      spawnWordsRef.current()
    }
  }

  return (
    <div ref={boxRef} onClick={handleClick} className="w-[100%] h-full relative right-10">
      <canvas className="" ref={canvasRef} />
    </div>
  )
}

export default FallingWordsCanvas
