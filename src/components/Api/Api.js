import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {getPosts,newPost} from '../../utils/db'

import './Api.css'

const Api = () => {
    const history = useHistory()
    const [response,setResponse] = useState("")
    const [requestState,setRequestState] = useState({
        url: "",
        body: null,
        method: "get"
    })

    const handleRequest = async () => {
        let res
        if (requestState.method === "get") {
            res = await getPosts(requestState.url)
        } else {
            res = await newPost(requestState.url)
        }
        setResponse(formatValue(res))
    }

    const formatValue = (data) => {
        try {
            return JSON.stringify(data,undefined,4)
        } catch {
            return data
        }
    }

    return (
        <div className="mainApi">
            <div className="mainApiHeader">
                <div className="mainApiHeaderURL">
                    <h3>API URL:</h3>
                    <input onChange={(e) => {setRequestState({...requestState,url:e.target.value})}} placeholder="Ex.: https://somesite.com/get"/>
                </div>
                <div className="mainApiHeaderMethods">
                    <span>HTTPS Methods: </span>
                    <div id="get" onClick={(e) => {
                        setRequestState({...requestState,method:e.target.id})
                    }} className={`${requestState.method === "get" ? "active" : null}`}>GET</div>
                    <div id="post" onClick={(e) => {
                        setRequestState({...requestState,method:e.target.id})
                    }} className={`${requestState.method === "post" ? "active" : null}`}>POST</div>
                </div>
                <div className="mainApiHeaderData">
                    <h4>Data for POST requests (JSON):</h4>
                    <textarea onChange={(e) => {
                        try {
                            setRequestState({...requestState,body:JSON.parse(e.target.value)})
                        } catch (err) {
                            // console.log(err)
                        }
                    }}/>
                </div>
                <button onClick={handleRequest}>Make request</button>
            </div>
            <div className="mainApiHeader">
                <div className="mainApiHeaderURL">
                    <h3>Response: {response !== "" ? `${JSON.parse(response)?.status} - ${JSON.parse(response)?.statusText}` : null}</h3>
                    <textarea spellCheck="false" defaultValue={response}/>
                </div>
            </div>
            <button className="mainApiBackButton" onClick={() => {history.push("/")}}>Back to menu</button>
        </div>
    );
}

export default Api;
