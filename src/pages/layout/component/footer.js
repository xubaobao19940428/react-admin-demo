import React, { Component } from 'react';
import './styles/footer.scss';
import { withRouter } from 'react-router-dom';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'dashboard',
          noActiveImg: require('../../../assets/img/tabbar-icon/index.png')
            .default,
          activeImg: require('../../../assets/img/tabbar-icon/index-active.png')
            .default,
          gifImg: 'https://img.ubo.vip/mp/tabbar-icon/index.gif',
          key: 'dashboard',
          path: '/',
        },
        {
          noActiveImg: require('../../../assets/img/tabbar-icon/selection.png')
            .default,
          activeImg: require('../../../assets/img/tabbar-icon/selection-active.png')
            .default,
          gifImg: 'https://img.ubo.vip/mp/tabbar-icon/selection.gif',
          name: 'home',
          key: 'home',
          path: '/home',
        },
        {
          noActiveImg: require('../../../assets/img/tabbar-icon/news.png')
            .default,
          activeImg: require('../../../assets/img/tabbar-icon/news-active.png')
            .default,
          gifImg: 'https://img.ubo.vip/mp/tabbar-icon/news.gif',
          name: 'cart',
          key: 'cart',
          path: '/cart',
        },
        {
          noActiveImg: require('../../../assets/img/tabbar-icon/mine.png')
            .default,
          activeImg: require('../../../assets/img/tabbar-icon/mine-active.png')
            .default,
          gifImg: 'https://img.ubo.vip/mp/tabbar-icon/mine.gif',
          name: 'my',
          key: 'my',
          path: '/my',
        },
      ],
      activeIndex: 0,
    };
  }
  componentDidMount() {
    this.state.list.map((item, index) => {
      if (item.path === this.props.location.pathname) {
        this.setState({
          activeIndex: index,
        });
        let show;
        setTimeout(() => {
          show = document.getElementsByClassName('show')[0];
        });
        setTimeout(() => {
          show.setAttribute('class', 'show hide');
        }, 1200);
      }
    });
  }
  shouldComponentUpdate() {
    return true;
  }
  tabClick(item, index) {
    this.setState({
      activeIndex: index,
    });
    let show;
    setTimeout(() => {
      show = document.getElementsByClassName('show')[0];
    });
    setTimeout(() => {
      show.setAttribute('class', 'show hide');
    }, 1200);
    this.props.tabUpdate(item);
  }
  render() {
    let list = this.state.list;
    return (
      <footer>
        <ul>
          {list.map((item, index) => {
            return (
              <li
                key={item.key}
                className={this.state.activeIndex === index ? 'active' : ''}
              >
                {this.state.activeIndex === index ? (
                  <div>
                    <img src={item.activeImg} alt=""></img>
                    <img src={item.gifImg} className="show" alt=""></img>
                    <span>{item.name}</span>
                  </div>
                ) : (
                  <div onClick={() => this.tabClick(item, index)}>
                    <img src={item.noActiveImg} alt=""></img>
                    <span>{item.name}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}
export default withRouter(Footer);
