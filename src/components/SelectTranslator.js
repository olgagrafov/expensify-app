import React from 'react';
import counterpart from 'counterpart';
import { connect } from 'react-redux';
import { setLanguage } from '../actions/filters';


class SelectTranslator extends React.Component {

    onLangChange = (e) => {     
       this.props.dispatch(setLanguage(e.target.value));
       counterpart.setLocale(e.target.value);  
       if(e.target.value === 'he') 
            document.body.setAttribute('dir', 'rtl');
       else     
            document.body.setAttribute('dir', 'ltr');    

    };
    render() {
        return (
            <div>
             <select defaultValue={counterpart.getLocale()} onChange={this.onLangChange} className="selectLang">
                <option value='en'>english</option>
                <option value='ru'>русский</option>
                <option value='he'>עברית</option>
             </select> 
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
      filters: state.filters     
    };
  };
  
export default connect(mapStateToProps)(SelectTranslator);

