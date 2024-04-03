import React from 'react';
import style from './index.module.css';
import UpdateConfirm from '~/client/script/component/UpdateConfirm';
import Container from '~/client/script/component/Container'
import NotFound from '~/client/script/page/NotFound';
import WebApp from '~/client/script/component/WebApp';
import Tab from '~/client/script/component/Tab';
import { readCookie, } from 'manner.js/client';
import global from '~/client/script/obj/global';

const {
  emitter,
  location,
} = global;

class Router extends WebApp {
  constructor(props) {
    super(props);
    this.route =  {};
    this.component = {};
    this.state = {
      loading: true,
      location: '/',
    };
  }

  async componentDidMount() {
    await this.bindEvent();
    emitter.send('page' + window.location.pathname);
  }

  bindEvent() {
    location.onChange((location) => {
      this.setState({
        location,
        loading: false,
      });
    });
    emitter.on('page/', async () => {
      const Home = await import('~/client/script/page/Home');
      this.addRoute('/', Home.default);
      location.to('/');
    });
    emitter.on('page/codeStyle', async () => {
      const CodeStyle = await import('~/client/script/page/CodeStyle');
      this.addRoute('/codeStyle', CodeStyle.default);
      location.to('/codeStyle');
    });
    emitter.on('page/commandLine', async () => {
      const CommandLine = await import('~/client/script/page/CommandLine');
      this.addRoute('/commandLine', CommandLine.default);
      location.to('/commandLine');
    });
    emitter.on('page/reference', async () => {
      const Reference = await import('~/client/script/page/CommandLine');
      this.addRoute('/reference', Reference.default);
      location.to('/reference');
    });
    emitter.on('page/api', async () => {
      const Api = await import('~/client/script/page/Api');
      this.addRoute('/api', Api.default);
      location.to('/api');
    });
  }

  addRoute(path, component) {
    const { route, } = this;
    if (route[path] === undefined) {
      route[path] = component;
    }
    return route[path];
  }

  getPage(path) {
    const { component, } = this;
    if (component[path] === undefined) {
      const Page = this.route[path];
      if (Page === undefined) {
        return <NotFound />;
      }
      if (Page) {
        component[path] = <Page />;
      } else {
        component[path] = null;
      }
    }
    return component[path];
  }

  render() {
    const { location, minize, update, loading, } = this.state;
    let router;
    if (loading === true) {
      router = null;
    } else {
      router =
      <Container>
        { update && <UpdateConfirm /> }
        <div id="page" className={style.page}>{this.getPage(location)}</div>
        <Tab />
      </Container>;
    }
    return router;
  }
}

export default Router;
