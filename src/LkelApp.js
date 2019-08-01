import React, { Component } from 'react';
//import Subject from "./components/Subject";
//import Gnb from "./components/Gnb"
//import Contents from "./components/Contents";
import './App.css';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          mode:'white',
          title: '회원정보',
          subject:'회원정보 작성',
          userId: '',
          userName: '',
          userAge:null,
          userAddress: '',
          member:[
              {
                  num: 0,
                  id: 'lkel',
                  name: '이용수',
                  age: 30,
                  address: '서울시'
              }
          ],
          button:'입력',
          error:'땡 잘못 접근하였습니다.'
      }
  }
  whiteHandelChange = (e) => {
      const { name, value } = e.target;
      this.setState({
          [name] : value
      });
  };
  whiteHandelCreate = () => {
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
        <div className="App">
            <h1>{this.state.title}</h1>
            <table className="lkel_table">
                <caption>{this.state.subject}</caption>
                <tbody>
                    <tr>
                        <th scope="row"><label htmlFor="userId">아이디</label></th>
                        <td> <input type="text" name="userId" id="userId" onChange={this.whiteHandelChange} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="userName">이름</label></th>
                        <td><input type="text" name="userName" id="userName" onChange={this.whiteHandelChange} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="userAge">나이</label></th>
                        <td><input type="text" name="userAge" id="userAge" onChange={this.whiteHandelChange} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="userAddress">주소</label></th>
                        <td><input type="text" name="userAddress" id="userAddress" onChange={this.whiteHandelChange} /></td>
                    </tr>
                </tbody>
            </table>
                
            <button onClick={this.whiteHandelCreate}  className="lkel_btn">
            {this.state.button}
            </button>

            {this.state.member.map(v =>{
            return(
                <div key={v.num} style={{marginTop:"30px"}}>
                <b>{v.id}</b><br />
                <b>{v.name}</b><br />
                <b>{v.age}</b><br />
                <b>{v.address}</b><br />
                </div>
            );
            })}
        </div>
      );
  }
}

export default App;
