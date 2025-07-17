'use client';

import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: 'product-discovery-call-with-clinton',
      });
      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: {},
          dark: {
            'cal-bg-muted': '#17181d',
          },
        },
      });
    })();
  }, []);
  return (
    <div className='cal-embed'>
      <Cal
        className='cal-bg'
        namespace='product-discovery-call-with-clinton'
        calLink='clintjeez/product-discovery-call-with-clinton'
        style={{
          width: '100%',
          height: '100%',
          overflow: 'scroll',
          background: 'inherit',
        }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
};

export default BookCall;
