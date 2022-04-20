import React from "react";
import { Component } from "react";
import QuizData from "../QuizData";

class Quiz extends Component{
    state = {
        UserAns: null,
        index: 0,
        options: [],
        score: 0,
        disabled: true
    }

    loadQuiz = () => {
        const {index} = this.state
        this.setState(() => {
            return {
                question: QuizData[index].question,
                options: QuizData[index].options,
                answer: QuizData[index].answer
            }
        })
    }
    nextHandler = () => {
        const {UserAns, answer, score} = this.state
        this.setState({ 
            index:this.state.index + 1
        })
        if(UserAns === answer){
            this.setState({
                score: score + 1
            })
        }

    }
    componentDidMount(){
        this.loadQuiz();
    }
    componentDidUpdate(prevProps, prevState){
        const{index} = this.state;
        if(this.state.index !== prevState.index){
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[index].question,
                    options : QuizData[index].options,
                    answer: QuizData[index].answer          
                }
            });

        }
    }
    checkAns = answer => {
        this.setState({
            UserAns: answer,
            disabled:false
        })
    }
    finishHandler = () => {
        if(this.state.index === QuizData.length - 1){
            this.setState({
                quizEnd: true
            })
        }
    }
    render(){
        const{ question, options, index, UserAns, quizEnd } = this.state
        if(quizEnd){
            return(
                <div>
                    <h2>You scored {this.state.score} out of {question.length}</h2>
                </div>
            )
        }
        return(
            <div>
                <h2>{question}</h2>
                <span>{`Question ${index + 1} of ${QuizData.length}`}</span>
                {options.map(option => (
                    <p key={option.id}
                    className={`options ${UserAns === option ? "selected" : null}`}
                    onClick={() => this.checkAns(option)}>
                        {option}
                    </p>
                ))}
                { index < QuizData.length - 1 && 
                <button
                className="ui inverted button" 
                    disabled = {this.state.disabled}
                    onClick = {this.nextHandler}>
                        Next
                    </button>
                }
                {index === QuizData.length && 
                <button
                className="ui inverted button"
                    disabled = {this.state.disabled}
                    onClick = {this.finishHandler}
                    >Submit
                    </button>
                    }
            </div>
        )
    }

    
}
export default Quiz