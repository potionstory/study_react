import React, { Component, Fragment } from 'react';
//import Subject from "./components/Subject";
//import Gnb from "./components/Gnb"
//import Contents from "./components/Contents";
import './LkelApp.css';

class WriteArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: '',
            userName: '',
            userAge: null,
            userAddress: '',
            member: [
                {
                    num: 0,
                    id: 'lkel',
                    name: '이용수',
                    age: 30,
                    address: '서울시'
                }
            ]
        }
    }

    submitHandelChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    };
    submitHandelCreate = () => {
        this.setState({
            member:[
                ...this.state.member,
                {
                    num: this.state.member.length,
                    id: this.state.userId,
                    name: this.state.userName,
                    age: this.state.userAge,
                    address: this.state.userAddress
                }
            ]
        });
    };
    
    render(){
        return(
            <Fragment>
                <table className="lkel_table">
                    <caption>회원정보 {this.props.subject}</caption>
                    <tbody>
                        <tr>
                            <th scope="row"><label htmlFor="userId">아이디</label></th>
                            <td><input type="text" name="userId" id="userId" onChange={this.submitHandelChange} /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="userName">이름</label></th>
                            <td><input type="text" name="userName" id="userName" onChange={this.submitHandelChange} /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="userAge">나이</label></th>
                            <td><input type="text" name="userAge" id="userAge" onChange={this.submitHandelChange} /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="userAddress">주소</label></th>
                            <td><input type="text" name="userAddress" id="userAddress" onChange={this.submitHandelChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="lkel_btn_box">    
                    <button type="button" onClick={function(e){
                        this.submitHandelCreate();
                        this.props.onMemberSubmit(this.state.member);
                    }.bind(this)} className="lkel_btn">
                        {this.props.submitButton}
                    </button>
                </div>
            </Fragment>
        );
    }
}

class ReadArticle extends Component {
    
    render(){
        
        var writeArticle = this.props.member;
        var readArticle = [];
        var i = 0;
        while(i<writeArticle.length){
            readArticle.push(
                <div key={writeArticle[i].num}>
                    <b>{writeArticle[i].id}</b><br />
                    <b>{writeArticle[i].name}</b><br />
                    <b>{writeArticle[i].age}</b><br />
                    <b>{writeArticle[i].address}</b><br />
                </div>
            );
            i = i + 1;
        }

        return(
          <>
            {readArticle}
          </>
        );
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode: 'write',
            title: '회원정보',
            subject: '작성',
            writeSubject: '작성',
            readSubject: '목록',
            member: [
                {
                    num: 0,
                    id: 'lkel',
                    name: '이용수',
                    age: 30,
                    address: '서울시'
                }
            ],
            submitButton: '입력',
            button: '목록',
            buttonId: 'read',
            writeButtonId: 'write',
            readButtonId: 'read',
            error: '땡 잘못 접근하였습니다.'
        }
    }
    
  
    modeHandelChange = (e) => {
        const { id } = e.target;
        console.log(id);
        this.setState({
            mode : id
        });
        if(id==='write'){
            this.setState({
                subject: this.state.writeSubject,
                button: this.state.readSubject,
                buttonId: this.state.readButtonId
            });
        } else {
            this.setState({
                subject: this.state.readSubject,
                button: this.state.writeSubject,
                buttonId: this.state.writeButtonId
            });
        }
    };
    
  
    render(){
        
        var write, read;
        if(this.state.mode==='write'){
            write = <WriteArticle subject={this.state.subject} submitButton={this.state.submitButton} onMemberSubmit={function(member){
                this.setState({
                    member: member
                });
            }.bind(this)}></WriteArticle>;
            read = null;
        } else if (this.state.mode==='read'){
            write = null;
            read = <ReadArticle member={this.state.member}></ReadArticle>;
        }

        return(
            <div className="App">
                <h1>{this.state.title}</h1>
                {write}
                {read}
                <div className="lkel_btn_box">    
                    <button type="button" onClick={this.modeHandelChange} id={this.state.buttonId} className="lkel_btn">
                        {this.state.button}
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
