import { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { add_Reminder, remove_Reminder, clear_Reminders } from '../actions';
const App = props => {
  const [reminder, setReminder] = useState({
    text: '',
    date: new Date(),
  });

  function renderReminders() {
    const reminders = props.reminders;
    return (
      <ul className='list-group'>
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className='list-group-item'>
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.date)).fromNow()}</div>
              <div
                className='closeIcon btn btn-danger'
                onClick={() => props.remove_Reminder(reminder.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className='App'>
      <img src='' />
      <div className='reminder-tite'>
        <h2>What Should U Do?</h2>
      </div>
      <input
        type='text'
        className='form-control'
        placeholder='Inter What U think....'
        value={reminder.text}
        onChange={e =>
          setReminder({ text: e.target.value, date: reminder.date })
        }
      />
      <DatePicker
        selected={reminder.date}
        onChange={date => setReminder({ text: reminder.text, date: date })}
        showTimeSelect
        timeformat='HH:mm'
        dateFormat='MMMM d, yyyy h:mm aa'
        timeCaption='time'
        value={reminder.date}
        className='form-control'
      />
      <button
        onClick={() => {
          props.add_Reminder(reminder.text, reminder.date);
          setReminder({ text: '', date: '' });
        }}
        className='btn btn-primary btn-block'
      >
        Add Reminder
      </button>
      {renderReminders()}
      <button
        className='btn btn-danger btn-block'
        onClick={() => props.clear_Reminders()}
      >
        Clear Reminders
      </button>
    </div>
  );
};

// function mapDispatchToProps(dispatch) {
//   return {
//     add_Reminder: () => dispatch(add_Reminder()),
//   };
// }

// function mapStateToProps(state) {
//   return {
//     reminders: state,
//   };
// }

export default connect(
  state => {
    return {
      reminders: state,
    };
  },
  { add_Reminder, remove_Reminder, clear_Reminders }
)(App);
