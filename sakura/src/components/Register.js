    
import React from "react";
import { BrowserRouter as Route} from "react-router-dom";
import ToggleSwitch from './ToggleSwitch';

export default class Register extends React.Component {
    goToRegister(){
      window.location.assign("/register");  
    };
    render(){
        return(
            <div id="info-box" className="register ltgreen-bkg">
                <h2 className="text-center text-primary">Sign Up</h2>
                <form id="registerForm">
                    <hr />
                    <div className="form-group row">
                        <label htmlFor="userName" className="col-sm-3">User Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="userName" placeholder="User Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="knownAs" className="col-sm-3">What do you like to be called?</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Name" name="knownAs" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label twenty">I am a</label>
                        <label className="radio-inline">
                            <input className="mr-3" type="radio" value="male" name="gender" />Male
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" value="female" name="gender" />Female
                        </label>
                    </div>
                    <div className="form-group">
                        <div className="plants">
                            <label className="control-label plants-title">I like to Plant: </label>
                            <div className="choices types-of-plants">
                                <label className="radio-inline">
                                <input className="mr-3" type="checkbox" name="plantType" />Tomatoes
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Cucumbers
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Sweet Peppers
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Beans
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Peas
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Carrots
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Summer Squash
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Lettuce
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Watermelon
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Onion
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Sweet Corn
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Cabbage
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Potatoes
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Radishes
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Mint
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Basil
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Ciliantro
                                </label>


                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Beets
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" name="plantType" />Zucchini
                                </label>
                            
                            </div>
                        </div>
                        <div className="other-plants">
                            <label htmlFor="other" className="col-sm-3">Other:</label>
                            <input className="form-control other" placeholder="Other" name="other" />
                        </div>
                        
                    </div>

                    <div className="form-group">
                        <label className="control-label ten">Do you have a garden?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" name="garden?" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" name="garden?" />No
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="control-label ten">Flowers or Produce?</label>
                        <label className="radio-inline">
                            <input className="mr-3" type="radio" name="plantPref" />Flowers
                        </label>
                        <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" name="plantPref" />Produce
                        </label>
                        <label className="radio-inline ml-3">
                            <input className="mr-3" type="checkbox" name="plantPref" />Both
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="control-label ten">Organic Produce?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" name="organic" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" name="organic" />No
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
                        <input className="form-control" placeholder="Email" name="city" />
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