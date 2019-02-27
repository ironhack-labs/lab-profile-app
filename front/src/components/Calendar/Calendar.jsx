import React, { Component } from 'react'
import './calendar.css'
import { Link } from 'react-router-dom';

export default class Calendar extends Component {

 
  





  render() {
    return (
        <div id="cal"> 
        
     
                <table id="days">
                    <td>mon</td> 
                    <td>tue</td> 
                    <td>wed</td> 
                    <td>thu</td> 
                    <td>fri</td> 
                    <td>sat</td>          
                    <td>sun</td> 
                </table> 
                
                <div id="cal-frame"> 
                        <table class="curr"> 
                                <tbody> 
                                    <tr>
                                      <td className="nil"></td>
                                      <td className="nil"></td>
                                      <td className="nil"></td>
                                      <td className="nil"></td>
                                      <Link  className="td" to="/"><td>1</td></Link>
                                      <td>2</td>
                                      <td>3</td>
                                   </tr> 
                                    <tr><td>4</td><td>5</td><td>6</td><td>6</td><td>7</td><td >8</td><td>9</td></tr> 
                                    <tr><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr> 
                                    <tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>23</td><td>24</td></tr> 
                                    <tr><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td >30</td><td>31</td></tr> 
                                </tbody> 
                            </table>
                  </div>
            </div>      
             
  )
  }
}
