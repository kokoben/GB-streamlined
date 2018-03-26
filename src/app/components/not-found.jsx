import React from 'react';

const NotFound = () => (
  <div
    style={{
      background: '#000',
      color: '#fff',
      maxWidth: '800px',
      margin: '0 auto',
    }}
  >
    <h1
      style={{
        fontSize: '48px',
        color: '#fff',
        marginTop: '50px',
      }}
    >
      404: Not Found
    </h1>
    <p style={{ fontSize: '32px' }}>
        You have arrived at a page that does not exist.
        That&apos;s a real bummer, as we here at GB-Streamlined
        prefer pages that not only exist, but also provide rich,
        beautiful content for your viewing pleasure.
    </p>
    <p style={{ fontSize: '32px' }}>
      But it&apos;s okay, you may simply click the back button
      on your browser toolbar to return to the previous page, which
      does, in fact, exist. Unless this page is the first page you
      happened upon upon (sic) arriving at this domain. In that case,
      you really messed up, and we don&apos;t even want to help you
      anymore.
    </p>
    <p style={{ fontSize: '32px' }}>
      Just kidding, we wouldn&apos;t leave you hanging like that.
      Simply type the address of this website into your URL
      bar and hit enter. Great things will happen. We promise.
    </p>
  </div>
);

export default NotFound;
