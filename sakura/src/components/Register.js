    
import React from "react";
import ToggleSwitch from './ToggleSwitch';
import axios from 'axios';

export default class Register extends React.Component {
    hideProduce = () =>{
        document.getElementById('produceChoices').style.display="none";
    };
    showProduce = () =>{
        document.getElementById('produceChoices').style.display="block";
    };
    goToRegister(){
      window.location.assign("/register");  
    };
// logic for registering a new user
registration = (event) =>{
    event.preventDefault();

    const {userName, firstName, knownAs, gender, organic, time, dateOfBirth, city, email, password, confirmPassword } = document.getElementById("registerForm");
    console.log( gender.value, userName.value, firstName.value, knownAs.value, organic.value, email.value, password.value, confirmPassword.value );
    console.log(time.value);
    console.log(dateOfBirth.value, city.value);

    const tomatoes = document.getElementById("tomatoes").checked;
    const cucumbers = document.getElementById("cucumbers").checked;
    const sweetPeppers = document.getElementById("sweetPeppers").checked;
    const beans = document.getElementById("beans").checked;
    const peas = document.getElementById("peas").checked;
    const carrots = document.getElementById("carrots").checked;
    const squash = document.getElementById("squash").checked;
    const lettuce = document.getElementById("lettuce").checked;
    const watermelon= document.getElementById("watermelon").checked;
    const onion = document.getElementById("onion").checked;
    const sweetCorn = document.getElementById("sweetCorn").checked;
    const cabbage = document.getElementById("cabbage").checked;
    const potatoes = document.getElementById("potatoes").checked;
    const radishes = document.getElementById("radishes").checked;
    const mint = document.getElementById("mint").checked;
    const basil = document.getElementById("basil").checked;
    const cilantro = document.getElementById("cilantro").checked;
    const beets = document.getElementById("beets").checked;
    const zucchini = document.getElementById("zucchini").checked;
    const broccoli = document.getElementById("broccoli").checked;
    const hasGarden = document.getElementById("yes-garden").checked;

    console.log(tomatoes, cucumbers, sweetCorn, beans, peas, carrots, lettuce, watermelon, onion, mint, basil);
    console.log(hasGarden);
    if (password.value === confirmPassword.value){
        console.log('passwords match, time to register.');
        if(userName.value && firstName.value && password.value && email.value && knownAs.value && city.value && gender.value && organic.value && time.value && dateOfBirth.value) {
            console.log('everything else matches, performing axios request');
            const userData = {
                userName: userName.value,
                firstName: firstName.value,
                lastName: knownAs.value,
                email: email.value,
                location: city.value,
                geocode: 'tbd',
                password: password.value,
                image: 'tbd',
                avatar: 'tbd',
                intro: 'currently blank',
                hasGarden: hasGarden,
                availableTime: time.value,
                organic: organic.value,
                flowers: true,
                tomatoes: tomatoes,
                cucumbers: cucumbers,
                sweetPeppers: sweetPeppers,
                beans: beans,
                peas: peas,
                carrots: carrots,
                squash: squash,
                lettuce: lettuce,
                watermelon: watermelon,
                onion: onion,
                sweetCorn: sweetCorn,
                cabbage: cabbage,
                potatoes: potatoes,
                radishes: radishes,
                mint: mint,
                basil: basil,
                cilantro: cilantro,
                beets: beets,
                zucchini: zucchini,
                broccoli: broccoli,
                other: false
            }
            console.log(userData);
            let route;
            if(window.location.href.includes('local')){
                 route = "http://localHost:3001/api/user-profiles/newUser"
            } else {
               route = "/api/user-profiles/newUser";
            }
            axios.post(route, {
                headers: "ACCEPT",
                //  {
                //     "Access-Control-Request-Method": "POST",
                //     "Content-Type": "application/json"
                // },
                body:{userData} 
            })
            .then(function(res){
                console.log(res);
            })
            .catch(function(err){
                console.log(err);
            });
             
        } else {
            alert('Whoops! Please make sure you have filled out all the fields.');
        }

    } else {
        password.value = "";
        confirmPassword.value = "";
        alert("passwords did not match");
    }



}


    render(){
        return(
            <div id="info-box" className="register ltpink-bkg">
                <h2 className="text-center">Sign Up</h2>
                <form id="registerForm">
                    <hr />
                    <div className="form-group row">
                        <label htmlFor="userName" className="col-sm-3">Please pick a unique user name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="userName" name="userName" placeholder="User Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-3">What is your first name?</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="firstName" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="knownAs" className="col-sm-3">What is your last name?</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Last Name" name="knownAs" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label twenty">I am a: </label>
                            <label className="radio-inline">
                            <input className="mr-3" type="radio" value="male" name="gender" />Male
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" value="female" name="gender" />Female
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" value="non-binary" name="gender" />Non-Binary
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" value="not-given" name="gender" />Prefer not to say
                            </label>
                    </div>
                    <div className="form-group">
                        <label className="control-label twenty">I like to Plant: </label>
                            <label className="radio-inline">
                            <input className="mr-3" type="radio" name="plantPref" onClick={this.hideProduce}/>Flowers
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" name="plantPref" onClick={this.showProduce}/>Produce
                            </label>
                            <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" name="plantPref" onClick={this.showProduce}/>Both
                            </label>

                            <div id="produceChoices" className="produce">
                                <p>What types of produce?</p> 
                                <div className="choices types-of-produce">
                                    <label className="radio-inline">
                                    <input className="mr-3" type="checkbox" name="tomatoes" id="tomatoes" />Tomatoes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cucumbers" id="cucumbers" />Cucumbers
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="sweet-peppers" id="sweetPeppers" />Sweet Peppers
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="beans" id="beans"  />Beans
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="peas" id="peas" />Peas
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="carrots" id="carrots" />Carrots
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="squash" id="squash" />Squash
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="lettuce" id="lettuce" />Lettuce
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="broccoli" id="broccoli" />Broccoli
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="watermelon" id="watermelon" />Watermelon
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="onion" id="onion" />Onion
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="sweet-corn" id="sweetCorn" />Sweet Corn
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cabbage" id="cabbage" />Cabbage
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="potatoes" id="potatoes" />Potatoes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="radishes" id="radishes" />Radishes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="mint" id="mint" />Mint
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="basil" id="basil" />Basil
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cilantro" id="cilantro" />Ciliantro
                                    </label>


                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="beets" id="beets" />Beets
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="zucchini" id="zucchini" />Zucchini
                                    </label>
                                
                                </div>
                
                            </div>
                        
                    </div>

                    <div className="form-group">
                        <label className="control-label twenty">Do you have a garden?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" value="true" name="garden-having" id="yes-garden" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" value="false" name="garden-having" id="no-garden" />No
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="control-label twenty">Organic Produce?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" name="organic" value="true" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" name="organic" value="false"/>No
                        </label>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="time" className="col-sm-3">Available Hours</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="number" placeholder="Avg available times per week" name="time" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dateOfBirth" className="col-sm-3">Date of Birth</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Date of Birth" id="dateOfBirth"    name="dateOfBirth" type="date" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="city" className="col-sm-3">Mailing Address</label>
                        <div className="col-sm-9">
                        <input className="form-control" placeholder="Full Address with City and State" name="city" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-3">E-Mail Address</label>
                        <div className="col-sm-9">
                        <input className="form-control" placeholder="Email" name="email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-3">Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" name="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="confirmPassword" className="col-sm-3">Confirm Password</label>
                        <div className="col-sm-9">
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                    </div>

                    <ToggleSwitch />
                        
                    <div className="form-group text-center">
                        <button className="btn btn-success mr-2" id="register" onClick={this.registration} type="submit">Register<i className="fa fa-spinner fa-spin"></i></button>
                        <button className="btn btn-danger" type="button">Cancel</button>
                    </div>
    
                </form>
            </div>
        );
    }
}