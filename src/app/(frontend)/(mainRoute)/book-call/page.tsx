'use client'

import React, { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

const BookCall = () => {
   useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#17181d","cal-bg":"#17181d","cal-bg-muted":"#17181d"},"dark":{"cal-bg":"#17181d","cal-bg-muted":"#17181d"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])



  return (
    <div className="h-full" >
      <Cal
        className="h-full"
        namespace="15min"
        calLink="clintonjames/15min"
        config={{ layout: 'month_view' }}
      />
    </div>
  )
}

export default BookCall
