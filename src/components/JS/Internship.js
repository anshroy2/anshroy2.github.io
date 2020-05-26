import React, { Component } from 'react';
import {Link} from './General.js';

class Internship extends Component {
    render() {
        const image = 
        (<div className='logo-div'>
            <a href={this.props.website} target='_blank' rel='noopener noreferrer'>
                <img alt={this.props.company_name} className='logo' id='gep-logo' src={this.props.logo} />
            </a>
        </div>);
        const desc = 
        (<div className='title-description-flexbox'>
            <h2 id='Title'>{this.props.position}</h2>
                <React.Fragment>
                    {this.props.description}
                </React.Fragment>   
        </div>);
        if (this.props.rev === 'rev') {
            return (
                <div className='specific-internship'>
                    {image}
                    {desc}
                </div>
            );
        }
        else {
            return (
                <div className='specific-internship specific-rev'>
                  <div className='logo-div'>
                    <a href={this.props.website} target='_blank' rel='noopener noreferrer'>
                      <img alt={this.props.company_name} className='logo' id='gep-logo' src={this.props.logo} />
                    </a>
                  </div>
                  <div className='title-description-flexbox'>
                    <h2 id='Title'>{this.props.position}</h2>
                    <React.Fragment>
                        {this.props.description}
                    </React.Fragment>
                    
                    
                  </div>
                </div>                
            );
        }

    }
}

class GEP extends Component {
    descriptions(props) {
        const first = 
        (<p className='intern-description'>
            GEP is a provider of supply chain software, focusing on the procure to pay suite
            (in which <Gartner/> ranked them in the top quadrant). I was in the Engineering 
            division of GEP, focusing on the <SMARTbyGEP/> platform. I worked on two projects 
            in this internship.
        </p>);
        const second = 
        (<p className='intern-description'>
        Created a backend service, utilizing Python-Flask as an API.
        Used string matching algorithms (such as Edit Distance)
        and synonym lists to match from one set of columns to another.
        </p>);
        const third =
        (<p className='intern-description'>
        Extracted JSON data from Azure DataLake using Apache Spark
        onto a docker hosted on Azure. A script (in Python) ran on
        a docker that would de-serialize the JSON object and convert
        into a flat table.
      </p>);
        const fourth = (<p></p>);
      return [first,second,third,fourth];

    }
    render() {
        return (
            <Internship 
            website='https://www.gep.com/' 
            company_name='GEP' 
            logo='https://www4.gep.com/sites/all/themes/gep/images/logo.svg'
            position='Software Engineering Intern'
            description={this.descriptions(this.props)}
            rev='rev'/>
        );
    }
}

function Gartner() {
    return <Link 
    href='https://www.gep.com/research-reports/gep-leader-in-gartner-magic-quadrant-procure-to-pay-suites'
    text='Gartner'
    />;
}

function SMARTbyGEP() {
    return <Link
        href='https://www.smartbygep.com/'
        text='SMART by GEP'
        />;
}

class Quicket extends Component {
    descriptions(props) {
        const first = 
        (<p className='intern-description'>
        Quicket Solutions is a startup that builds cloud-based solutions
        for police forces. The full-integrated solutions includes
        citations, court and hearings, real-time data analytics, online
        payment processing, and many more.
      </p>);
        const second = 
        (<p className='intern-description'>
        Developed several parsers using ANTLR that can parse through forms
        containing important data. The parser developed for one type of
        form can then be used to store structured data collected.
      </p>);
        const third =
        (<p className='intern-description'>
        Devised a new internal tool that allows non-developers to access
        and change features in the dataabse. It also keeps track of who
        changed values in the database.
      </p>);
        const fourth = 
        (<p className='intern-description'>
        Introduced several new official forms from scratch that are used
        later on the platform to auto-generate documents containing the
        appropriate data.
      </p>);
      return [first,second,third,fourth];

    }
    render() {
        return (
            <Internship 
            website='https://www.quicketsolutions.com/qs/' 
            company_name='Quicket Solutions' 
            logo='https://www.quicketsolutions.com/qs/wp-content/themes/quicket/images/logo.svg'
            position='Software Engineering Intern'
            description={this.descriptions(this.props)}/>
        );
    }
}

export {
    GEP,Quicket
};