import React, { useEffect, useState } from 'react'; // 改狀態的
import axios from 'axios'; // 
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./vote.css"
import GoLog from '../../pages/memberpage/GoLogin';




const Votecm = () => {
    const { voteId } = useParams();
    const voteIdNumber = parseInt(voteId, 10);
    const [votecm, setVotecm] = useState([]);
    // const [selectedOption, setSelectedOption] = useState(null);
    const [voteResult, setVoteResult] = useState(null);

    useEffect(() => {
        const fecthAllVotecm = async () => {
            try {
                const res = await axios.get(`http://localhost:3344/vote/${voteIdNumber}`);
                setVotecm(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fecthAllVotecm();
    }, [voteIdNumber]);

    useEffect(() => {
        axios.get('http://localhost:3344/checkAuth', { withCredentials: true }).then((responseAuth) => {
            console.log(responseAuth)
            if (responseAuth.data === "尚未登入") {
                console.log('not login yet')
            }
        })
    }, []);

    // 改顏色邊框顏色的，要用的話下面的code記得改
    // function handleOptionClick(event) {
    //     document.querySelectorAll('.voteAnswer').forEach((answer) => {
    //       answer.classList.remove('highlight');
    //     });
    //     event.target.classList.add('highlight');
    //   }

    // 把資料給後端
    const handleVoteSubmit1 =
        async (option) => {
            try {
                const res = await axios.post(`http://localhost:3344/updateOption1`, {
                    option,
                    voteId,
                });
                if (res.data === "noooo") {
                    alert("投票沒登入，不行呦")
                    window.location = "/golog"
                }
                if (res.data === "aaa") {
                    setVoteResult(res.data);
                    console.log("handleVoteSubmit1", handleVoteSubmit1, "option", option)
                }
                // setVoteResult(res.data);
                // console.log("handleVoteSubmit", option);
                // window.location = `/Vote/answer/${voteId} `;
            } catch (err) {
                console.log(err);
            }
        };

    // 把資料給後端
    const handleVoteSubmit2 =
        async (option) => {
            try {
                const res = await axios.post(`http://localhost:3344/updateOption2`, {
                    option,
                    voteId,
                });
                setVoteResult(res.data);
                console.log("handleVoteSubmit", option);
                window.location = `/Vote/answer/${voteId} `;
            } catch (err) {
                console.log(err);
            }
        };

    // 把資料給後端
    const handleVoteSubmit3 =
        async (option) => {
            try {
                const res = await axios.post(`http://localhost:3344/updateOption3`, {
                    option,
                    voteId,
                });
                setVoteResult(res.data);
                console.log("handleVoteSubmit", option);
                window.location = `/Vote/answer/${voteId} `;
            } catch (err) {
                console.log(err);
            }
        };

    // 把資料給後端
    const handleVoteSubmit4 =
        async (option) => {
            try {
                const res = await axios.post(`http://localhost:3344/updateOption4`, {
                    option,
                    voteId,
                });
                setVoteResult(res.data);
                console.log("handleVoteSubmit", option);
                window.location = `/Vote/answer/${voteId} `;
            } catch (err) {
                console.log(err);
            }
        };




    return (

        votecm.map((ooo) => (

            <div className="votePoll" >
                <div className="question">{ooo.voteName}</div>
                <div className="voteAnswers">
                    {/* 投票選項 */}
                    <button className="voteAnswer" onClick={() => handleVoteSubmit1(ooo.option1)}>
                        {ooo.option1}
                    </button>
                    <button className="voteAnswer" onClick={() => handleVoteSubmit2(ooo.option2)}>
                        {ooo.option2}
                    </button>
                    <button className="voteAnswer" onClick={() => handleVoteSubmit3(ooo.option3)}>
                        {ooo.option3}
                    </button>
                    <button className="voteAnswer" onClick={() => handleVoteSubmit4(ooo.option4)} >
                        {ooo.option4}
                    </button>
                </div>
            </div>

        ))

    );

}

export default Votecm;