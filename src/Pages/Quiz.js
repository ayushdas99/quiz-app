import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import QuizData from "../QuizData";

class Quiz extends Component{
    state = {
        UserAns: null,
        index: 0,
        options: [],
        score: 0,
        disabled: true,
        id: 0,
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

    prevHandler = () => {
        this.setState({ 
            index:this.state.index - 1
        })
    }
    quesOneHandler = () => {
        this.setState({ 
            index:0
        })

    }
    quesTwoHandler = () => {
        this.setState({ 
            index:1
        })

    }
    quesThreeHandler = () => {
        this.setState({ 
            index:2
        })

    }
    quesFourHandler = () => {
        this.setState({ 
            index:3
        })

    }
    quesFiveHandler = () => {
        this.setState({ 
            index:4
        })

    }
    quesSixHandler = () => {
        this.setState({ 
            index:5
        })
    }
    quesSevenHandler = () => {
        this.setState({ 
            index:6
        })
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
            this.setState({
                quizEnd: true
            })
        
    }

    render(){
        const{ question, options, index, UserAns, quizEnd } = this.state
        if(quizEnd){
            return(
                <div className="end">
                    <h2>You scored {this.state.score} out of {QuizData.length}!!</h2>
                    <p>Correct answers for the quiz are:</p>
                    
                        {QuizData.map((item, index) => (
                            <p key={index}>
                               {item.answer}
                            </p>
                        ))}
                <button className='quiz-button'><Link to='/Quiz'>PLAY again?</Link></button>
                <button className='home'><Link to='/'>Take me HOME</Link></button>
                </div>
            )
        }
        return(
            <>
            <div className='sidebar'>
        <h1>Question Grid</h1>
        <button className="button-style" onClick={this.quesOneHandler}>1</button>  
        <button className="button-style" onClick={this.quesTwoHandler}>2</button>  
        <button className="button-style" onClick={this.quesThreeHandler}>3</button>  
        <button className="button-style" onClick={this.quesFourHandler}>4</button>  
        <button className="button-style" onClick={this.quesFiveHandler}>5</button>  
        <button className="button-style" onClick={this.quesSixHandler}>6</button>  
        <button className="button-style" onClick={this.quesSevenHandler}>7</button>  
       
        
        </div>
    
                
            <div className="quiz-main">
                <h2>{question}</h2>
                <span>{`Question ${index + 1} of ${QuizData.length}`}</span>
                {options.map(option => (
                    <p key={option.id}
                    className={`options ${UserAns === option ? "selected" : null}`}
                    onClick={() => this.checkAns(option)}>
                        {option}
                    </p>
                ))}
                { index > 0 && index < QuizData.length  && 
                <button
                className="previous-button" 
                    onClick = {this.prevHandler}>
                        &larr; Previous
                    </button>
                }
                { index < QuizData.length - 1 && 
                <button
                className="next-button" 
                    onClick = {this.nextHandler}>
                        Next &rarr;
                    </button>
                }
                
                <button
                className="submit-button"
                    onClick = {this.finishHandler}
                    >Submit
                    </button>
                    
            </div>
            </>
            
        )
    }   
}
export default Quiz