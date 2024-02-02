import './App.css';
import { useState } from "react";

function App() {

	let [display, setdisplay] = useState("")
	let [firstval, setfirstval] = useState("")
	let [sign, setsign] = useState("")

	const fun = (x) => {
		setdisplay(display + x);
	}
	const caldata = (m) => {
		setfirstval(display)
		setdisplay("")
		setsign(m)
	}
	const totalcal = () => {
		// setlastval(display)
		const lastval = display;
		switch (sign) {
			case 1:
				setdisplay((parseFloat(firstval) + parseFloat(lastval)));
				break;
			case 2:
				setdisplay((parseFloat(firstval) - parseFloat(lastval)));
				break;
			case 3:
				setdisplay((parseFloat(firstval) * parseFloat(lastval)));
				break;
			case 4:
				if(parseFloat(lastval)===0){
					setdisplay("Cannot Divide By Zero")
				}
				else{
					setdisplay((parseFloat(firstval) / parseFloat(lastval)));
				}
				break;
			case 5:
				setdisplay((parseFloat(firstval) % parseFloat(lastval)));
				break;
			default:
				setdisplay("Error");
		}
	}
	const handleClear = () =>{
		setdisplay("")
	}
	const singledel = () =>{
		setdisplay((prevdisplay)=>prevdisplay.slice(0,-1));
	}

	return (
		<div className="App">

			<div class="main_div">
				<div class="text">
					<input type="text" name="" value={display} ></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"CE"} onClick={() => handleClear()}></input>
					<input type="button" name="" value={"C"} onClick={() => handleClear()}></input>
					<input type="button" name="" value={"Del"} onClick={() => singledel()}></input>
					<input type="button" name="" value={"/"} onClick={() => caldata(4)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"7"} onClick={() => fun(7)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"8"} onClick={() => fun(8)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"9"} onClick={() => fun(9)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"*"} onClick={() => caldata(3)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"4"} onClick={() => fun(4)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"5"} onClick={() => fun(5)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"6"} onClick={() => fun(6)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"-"} onClick={() => caldata(2)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"1"} onClick={() => fun(1)} style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"2"} onClick={() => fun(2)} style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"3"} onClick={() => fun(3)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"+"} onClick={() => caldata(1)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"%"} onClick={() => caldata(5)} ></input>
					<input type="button" name="" value={"0"} style={{backgroundColor:"#5C5B57"}} onClick={()=>fun(0)}></input>
					<input type="button" name="" value={"."}style={{backgroundColor:"#5C5B57"}} onClick={() => fun(".")} ></input>
					<input type="button" name="" value={"="} onClick={() => totalcal()} style={{backgroundColor:"#91908C"}}></input>
				</div>
			</div>
		</div>
	);
}

export default App;
