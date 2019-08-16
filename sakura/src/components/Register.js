    
import React from "react";
import ToggleSwitch from './ToggleSwitch';

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
    render(){
        return(
            <div id="info-box" className="register ltpink-bkg">
                <h2 className="text-center">Sign Up</h2>
                <form id="registerForm">
                    <hr />
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-3">What is your first name?</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="firstName" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-3">What is your last name?</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Last Name" name="lastName" />
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
                                    <input className="mr-3" type="checkbox" name="tomatoes" />Tomatoes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cucumbers" />Cucumbers
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="sweet-peppers" />Sweet Peppers
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="beans" />Beans
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="peas" />Peas
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="carrots" />Carrots
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="squash" />Squash
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="lettuce" />Lettuce
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="broccoli" />Broccoli
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="watermelon" />Watermelon
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="onion" />Onion
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="sweet-corn" />Sweet Corn
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cabbage" />Cabbage
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="potatoes" />Potatoes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="radishes" />Radishes
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="mint" />Mint
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="basil" />Basil
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="cilantro" />Ciliantro
                                    </label>


                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="beets" />Beets
                                    </label>

                                    <label className="radio-inline ml-3">
                                    <input className="mr-3" type="checkbox" name="zucchini" />Zucchini
                                    </label>
                                
                                </div>
                
                            </div>
                        
                    </div>

                    <div className="form-group">
                        <label className="control-label twenty">Do you have a garden?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" name="garden?" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" name="garden?" />No
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
                            <input className="form-control" placeholder="Avg available times per week" name="time" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dateOfBirth" className="col-sm-3">Date of Birth</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Date of Birth" name="dateOfBirth" type="date" />
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
                        <button className="btn btn-success mr-2" type="submit">Register<i className="fa fa-spinner fa-spin"></i></button>
                        <button className="btn btn-danger" type="button">Cancel</button>
                    </div>
    
                </form>
            </div>
        );
    }
}