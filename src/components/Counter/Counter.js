import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';
import './Counter.css';

// before:
// class Counter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   HandleImcrement = event => {
//     this.setState(prevState => {
//       return { value: prevState.value + 1 };
//     });
//   };
//   HandleDecrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value - 1 };
//     });
//   };

//   render() {
//     return (
//       <div className={style.Counter}>
//         <span className={style.value}>{this.state.value}</span>
//         <Controls
//           onIncrement={this.HandleImcrement}
//           onDecrement={this.HandleDecrement}
//         />
//       </div>
//     );
//   }
// }

// after:
function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  // value: state.counterValue,
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
