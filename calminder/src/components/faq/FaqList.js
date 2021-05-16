/*import React,{Component} from 'react';
import FaqCard from "./FaqCard";

class FaqList extends Component{
 constructor(props) {
     super(props);
     this.state = {
         questions: []
     }
 };

 renderQuestions = () => {
     const { questions } = this.state;
     return questions.map((question) =>{
         return (
             <li key={question.id}>
                <FaqCard question={question}/>
             </li>
         );
     });
 };

render() {
    return (
        <ol>
            {
                this.renderQuestions()
            }
        </ol>
    );
}
}

export default FaqList;*/