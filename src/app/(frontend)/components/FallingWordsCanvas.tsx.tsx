import React, { useEffect, useState, useRef } from 'react'
import Matter from 'matter-js'

const STATIC_DENSITY = 15
// const PARTICLE_SIZE = 6
// const PARTICLE_BOUNCYNESS = 0.9

const wordsToDisplay: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Supabase',
  'Web3',
  'Solidity',
  'Rust',
  'N8N',
  'AI',
  'SAAS',
  'Automation',
]

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const FallingWordsCanvas: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [constraints, setConstraints] = useState<DOMRect | undefined>()
  const [scene, setScene] = useState<Matter.Render | undefined>()

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

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height

      // Dynamically update floor
      // @ts-ignore
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
    if (scene && constraints) {
      const { width } = constraints

      // Create falling words
      for (let i = 0; i < wordsToDisplay.length; i++) {
        const word = wordsToDisplay[i]

        const wordBody = Matter.Bodies.rectangle(
          Math.random() * width,
          -100 * i,
          word.length * 10,
          40,
          {
            label: word,
            render: {
              fillStyle: 'transparent',
              strokeStyle: 'transparent',
            },
          },
        )
        wordBody.render.fillStyle = getRandomColor()
        // @ts-ignore
        Matter.Composite.add(scene.engine.world, wordBody)
      }

      // Override render function to draw text instead of rectangles
      Matter.Events.on(scene, 'afterRender', () => {
        const context = scene.context as CanvasRenderingContext2D
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        // @ts-ignore
        for (const body of scene.engine.world.bodies) {
          if (body.label && body.label !== 'Body') {
            const pos = body.position
            const angle = body.angle
            const word = body.label
            const fillStyle = body.render.fillStyle

            context.save()
            context.translate(pos.x, pos.y)
            context.rotate(angle)

            // Draw border with border radius
            context.beginPath()
            context.moveTo(-body.bounds.max.x / 2 + 10, -20)
            context.lineTo(body.bounds.max.x / 2 - 10, -20)
            context.quadraticCurveTo(body.bounds.max.x / 2, -20, body.bounds.max.x / 2, -10)
            context.lineTo(body.bounds.max.x / 2, 10)
            context.quadraticCurveTo(body.bounds.max.x / 2, 20, body.bounds.max.x / 2 - 10, 20)
            context.lineTo(-body.bounds.max.x / 2 + 10, 20)
            context.quadraticCurveTo(-body.bounds.max.x / 2, 20, -body.bounds.max.x / 2, 10)
            context.lineTo(-body.bounds.max.x / 2, -10)
            context.quadraticCurveTo(-body.bounds.max.x / 2, -20, -body.bounds.max.x / 2 + 10, -20)
            context.closePath()
            context.fillStyle = fillStyle
            context.fill()
            context.lineWidth = 2
            context.strokeStyle = 'transparent'
            context.stroke()

            // Style for the falling words
            context.fillStyle = 'black'
            context.font = 'bold 17px Arial'
            context.textAlign = 'center'
            context.textBaseline = 'middle'

            // Draw the word as text
            context.fillText(word, 0, 0)

            context.restore()
          }
        }
      })
    }
  }, [scene, constraints])

  const handleClick = () => {
    setConstraints(boxRef.current?.getBoundingClientRect())
  }

  return (
    <div ref={boxRef} onClick={handleClick} className="w-[100%] h-full relative right-10">
      <canvas className="" ref={canvasRef} />
    </div>
  )
}

export default FallingWordsCanvas
