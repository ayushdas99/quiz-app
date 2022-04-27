import React from "react";
import { Component } from "react";
import Navbar from "../Layouts/Navbar";
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
        const {} = this.state
        this.setState({ 
            index:this.state.index - 1
        })

    }
    quesoneHandler = () => {
        const {} = this.state
        this.setState({ 
            index:0
        })

    }
    questwoHandler = () => {
        const {} = this.state
        this.setState({ 
            index:1
        })

    }
    questhreeHandler = () => {
        const {} = this.state
        this.setState({ 
            index:2
        })

    }
    quesfourHandler = () => {
        const {} = this.state
        this.setState({ 
            index:3
        })

    }
    quesfiveHandler = () => {
        const {} = this.state
        this.setState({ 
            index:4
        })

    }
    quesixHandler = () => {
        const {} = this.state
        this.setState({ 
            index:4
        })

    }
    quessevenHandler = () => {
        const {} = this.state
        this.setState({ 
            index:4
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
        const{ question, options, index, UserAns, quizEnd, id } = this.state
        if(quizEnd){
            return(
                <div className="end">
                    <h2>You scored {this.state.score} out of {QuizData.length}!!</h2>

                    
                    <p>Correct answers for the quiz are:</p>
                    <ul>
                        {QuizData.map((item, index) => (
                            <li key={index}>
                                {item.answer}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        return(
            <>
            <div className='sidebar'>
        <h1>Question Grid</h1>
        <button className="button-style" onClick={this.quesoneHandler}>1</button>  
        <button onClick={this.questwoHandler}>2</button>  
        <button onClick={this.questhreeHandler}>3</button>  
        <button onClick={this.quesfourHandler}>4</button>  
        <button onClick={this.quesfiveHandler}>5</button>  
        <button onClick={this.quessixHandler}>6</button>  
        <button onClick={this.quessevenHandler}>7</button>  
       
        
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
                className="ui inverted button" 
                    onClick = {this.prevHandler}>
                        &larr; Previous
                    </button>
                }
                { index < QuizData.length - 1 && 
                <button
                className="ui inverted button" 
                    onClick = {this.nextHandler}>
                        Next &rarr;
                    </button>
                }
                
                <button
                className="ui inverted button"
                    onClick = {this.finishHandler}
                    >Submit
                    </button>
                    
            </div>
            </>
            
        )
    }

    
}
export default Quiz