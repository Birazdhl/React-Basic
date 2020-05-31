import React,{Component} from 'react'

const UpdatedComponent = (WrappedComponent, incrementNumber) => {
    class WithCounter extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                  count: 0      
            }
        }
    
        countIncreament = () => {
            this.setState( prevState => {
               return { count: prevState.count + incrementNumber }
            })
        }

        render(){
            return(
                <WrappedComponent count={this.state.count} incrementCount={this.countIncreament} 
                {...this.props}
                />
            )
        }
    }
    return WithCounter
}

export default UpdatedComponent