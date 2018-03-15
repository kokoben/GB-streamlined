import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import Home from '../../home/components/home';
import Quicklooks from '../../quicklooks/components/quicklooks';
import Bombcasts from '../../bombcasts/components/bombcasts';
import Features from '../../features/components/features';
import { XS, SM, MD, LG, XL, XXL } from '../../media-queries';

const Content = () => (
  <div>
    <XS>
      <Layout.Content
        style={{
          background: '#fff',
          padding: '10px 10px',
          width: '100%',
          margin: '0 auto 50px',
        }}
      >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/quicklooks" component={Quicklooks} />
          <Route path="/features" component={Features} />
          <Route path="/bombcasts" component={Bombcasts} />
        </main>
      </Layout.Content>
    </XS>
    <SM>
      <Layout.Content
        style={{
          background: '#fff',
          padding: '10px 10px',
          width: '100%',
          margin: '0 auto 50px',
        }}
      >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/quicklooks" component={Quicklooks} />
          <Route path="/features" component={Features} />
          <Route path="/bombcasts" component={Bombcasts} />
        </main>
      </Layout.Content>
    </SM>
    <MD>
      <Layout.Content
        style={{
          background: '#fff',
          padding: '10px 10px',
          width: '740px',
          margin: '0 auto 50px',
        }}
      >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/quicklooks" component={Quicklooks} />
          <Route path="/features" component={Features} />
          <Route path="/bombcasts" component={Bombcasts} />
        </main>
      </Layout.Content>
    </MD>
    <LG>
      <Layout.Content
        style={{
          background: '#fff',
          padding: '10px 10px',
          width: '740px',
          margin: '0 auto 50px',
        }}
      >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/quicklooks" component={Quicklooks} />
          <Route path="/features" component={Features} />
          <Route path="/bombcasts" component={Bombcasts} />
        </main>
      </Layout.Content>
    </LG>
    <XL>
      <Layout.Content
        style={{
          background: '#fff',
          padding: '10px 10px',
          width: '940px',
          margin: '0 auto 50px',
        }}
      >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/quicklooks" component={Quicklooks} />
          <Route path="/features" component={Features} />
          <Route path="/bombcasts" component={Bombcasts} />
        </main>
      </Layout.Content>
    </XL>
    <XXL>
      <Layout.Content
        style={{
          background: '#fff',
          padding: '10px 10px',
          width: '1160px',
          margin: '0 auto 50px',
        }}
      >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/quicklooks" component={Quicklooks} />
          <Route path="/features" component={Features} />
          <Route path="/bombcasts" component={Bombcasts} />
        </main>
      </Layout.Content>
    </XXL>
  </div>
);

export default Content;
