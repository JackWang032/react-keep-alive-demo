import { Component, createContext, createElement } from 'react'

const KeepAliveContext = createContext({});

const withScope = WrappedComponent => props => (
  <KeepAliveContext.Consumer>{keep => <WrappedComponent {...props} keep={keep} />}</KeepAliveContext.Consumer>
)

export class AliveScope extends Component<any> {
    nodes = {};
    state = {};

    keep = (id, children) => {
        return new Promise((resolve) =>
            this.setState(
                {
                    [id]: { id, children },
                },
                () => resolve(this.nodes[id])
            )
        );
    };

    render() {
        return (
            <KeepAliveContext.Provider value={this.keep}>
                {this.props.children}
                <div className="keepers-store">
                    {Object.values(this.state).map(({ id, children }: any) => (
                        <div
                            key={id}
                            ref={(node) => {
                                this.nodes[id] = node;
                            }}
                        >
                            {children}
                        </div>
                    ))}
                </div>
            </KeepAliveContext.Provider>
        );
    }
}

class ActivationKeepAlive extends Component {
  constructor(props) {
    super(props)
  }

  placeholder: HTMLElement | null = null;

  componentDidMount(): void {
      this.init(this.props)
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
       this.props.keep(this.props.id, this.props.children)
  }

  init = async ({ id, children, keep }) => {
    const realContent = await keep(id, children)
    this.placeholder?.appendChild(realContent)
  }

  render() {
    
    return (
      <div
        className='keep-placeholder'
        ref={node => {
          this.placeholder = node
        }}
      />
    )
  }
}

export default withScope(ActivationKeepAlive)
