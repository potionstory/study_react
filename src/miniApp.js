import React, { Component } from 'react';

class MiniApp extends Component {
    // 기본 상태값
    state = {
        member: [],
        name: '',
        day: ''
    };

    handleCreate = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        this.setState({     // 상태값 재정의
            member: [
                ...this.state.member,
                {
                    name: this.state.name,
                    day: this.state.day,
                }
            ]
        });
        this.setState({     // 상태값 초기화
            name: '',
            day: ''
        })
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    render(){
        const labelStyle = {
            display:"inline-block",
            width:"90px",
            textAlign:"center"
        };
        return (
            <>
                <h1>스터디 참여자</h1>
                <form onSubmit={this.handleCreate}>
                    <label htmlFor="name" style={labelStyle}>이름</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름"
                        title="이름"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br />
                    <label htmlFor="day" style={labelStyle}>9월 월급날</label>
                    <input
                        type="date"
                        min="2019-09-01"
                        max="2019-09-30"
                        id="day"
                        name="day"
                        title="월급날"
                        value={this.state.day}
                        onChange={this.handleChange}
                    />
                    <button type="submit">등록하기</button>
                </form>
                <p>
                    입력값 : <span>{this.state.name} / {this.state.day}</span>
                </p>

                <ul>
                    {this.state.member.map((v, idx) => {
                        return (
                            <li key={idx}>{v.name} / {v.day}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default MiniApp;
