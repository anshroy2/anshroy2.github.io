import React, {Component} from 'react';
import './About.css'
import Mypic from './Ansh.jpg'

class About extends Component {
  render() {
    return (
    	<div class="About">
    		<h1 class="Name">Ansh Roy</h1>
    		<img class="Circle" src={Mypic} alt="Ansh Roy" width="350" height="350"/>
    		<div>
	    		<br/>
	    		
	    		<text id="personal-description">I'm Ansh Roy, a junior in Computer Engineering at <a href="https://illinois.edu/">University of Illinois at Urbana-Champaign</a>, graduating in May 2021.</text>
	    		
	    		<br/>
	    		
	    		<text>I like to make </text>
	    		<a href="https://open.spotify.com/user/sev3xp8n5zjxaiuvggeqdqt42?si=55aLI45SSi6hQZBomsBMVg">playlists</a> 
	    		<text> and watch TV shows in my free time.</text>
	    		
	    		<br/>

	    		<text>This semester, I'm interning at <a href="https://www.quicketsolutions.com/qs/">Quicket Solutions</a> as a Software Engineering Intern, as a Backend Developer.</text>

	    		<br/>

	    		<text>In Summer 2019, I interned at <a href="https://www.gep.com/">GEP Worldwide</a> as a Data Science Intern.</text>

	    		<div class="Internships">
		          <br/><hr/>


		          <div id="Company_with_Logo">
		            <a href="https://www.gep.com/" target="_blank" rel="noopener noreferrer">
		              <img alt="GEP" class="Logo" src="https://www4.gep.com/sites/all/themes/gep/images/logo.svg"/>
		            </a>
		            <div class="Description_bullet_points">
		              <h2 id="Title">Data Science Intern</h2>
		              <p class="Intern-Description">GEP is a provider of supply chain software, focusing on the procure to pay suite (in which <a href="https://www.gartner.com/doc/reprints?id=1-1OCNDGBV&ct=190802&st=sb?source_pageurl=https://www.gep.com/research-reports/thank-you?sourcenid=2866&type=research_report&source_pageurl=https%3A//www.gep.com/research-reports/gep-leader-in-gartner-magic-quadrant-procure-to-pay-suites">Gartner</a> ranked them in the top quadrant). I was in the Engineering division of GEP, focusing on the <a href="https://www.smartbygep.com/">SMART by GEP</a> platform. I worked on two projects in this internship.</p>

		              <p class="Intern-Description">Created a backend service, utilizing Python-Flask as an API. Used string matching algorithms (such as Edit Distance) and synonym lists to match from one set of columns to another.</p>

		              <text class="Intern-Description">Extracted JSON data from Azure DataLake using Apache Spark onto Azure docker. A script (in Python) ran on a docker that would de-serialize the JSON object and convert into a flat table.</text>
		            </div>
		          </div>
		        </div>

	    		

    		</div>
    	</div>
    );
  }
}

export default About;