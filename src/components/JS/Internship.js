import React, { Component } from 'react';
import {Link} from './General.js';

class Internship extends Component {
    render() {
        const image = 
        (<div className='logo-div'>
            <a href={this.props.website} target='_blank' rel='noopener noreferrer'>
                <img alt={this.props.company_name} className={'logo ' + this.props.imgExtend} src={this.props.logo} />
            </a>
        </div>);
        const image_rev = 
        (<div className='logo-div'>
            <a href={this.props.website} target='_blank' rel='noopener noreferrer'>
                <img alt={this.props.company_name} className='logo logo-rev' src={this.props.logo} />
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
                  {image_rev}
                  {desc}
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
            (in which {Gartner} ranked them in the top quadrant). I was in the Engineering 
            division of GEP, focusing on the {SMARTbyGEP} platform. I worked on two projects 
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
            logo='https://www.gep.com/themes/custom/geptheme/gep-logo-color.svg'
            position='Software Engineering Intern'
            description={this.descriptions(this.props)}/>
        );
    }
}

const GEPobj = {
    Gartner: {href: 'https://www.gep.com/research-reports/gep-leader-in-gartner-magic-quadrant-procure-to-pay-suites', text: 'Gartner'},
    SMART: {href: 'https://www.smartbygep.com/', text: 'SMART by GEP'}
}

const Gartner = <Link info={GEPobj.Gartner}/>
const SMARTbyGEP = <Link info={GEPobj.SMART}/>

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
            logo='https://www.quicketsolutions.com/wp-content/uploads/2021/03/NewLogo-Color.svg'
            position='Software Engineering Intern'
            description={this.descriptions(this.props)}
            rev='rev'/>
        );
    }
}

class NASDAQ extends Component {
    descriptions(props) {
        const first = 
        (<p className='intern-description'>
        NASDAQ is primarily a stock exchange, that engages in trading, 
        clearing, exchange technology, security, and much more. I interned in the 
        security department, on the Governance and Compliance team.
      </p>);
        const second = 
        (<p className='intern-description'>
         Designed and implemented a new automated system for cloud
         exception management. Through here, cloud users can utilize
         the system to get approval for cloud exceptions. This way, 
         the system can keep track of exceptions.
      </p>);
        const third =
        (<p className='intern-description'>
        {/* The system consisted of utilizing Jira Service Desk for users 
        to file for tickets, and for management to appropriately respond
        and aprove requests. I launched a backend service utilizing AWS 
        API Gateway, AWS Lambda, and AWS Secrets Manager to encrypt a JSON 
        object into a JWT key. */}
      </p>);
        const fourth = 
        (<p className='intern-description'>
        To ensure integrity of this service, I programmed the backend service 
        in Terraform, and utilized Linux CLI and CI/CD to launch the Terraform 
        code to AWS.
      </p>);
      return [first,second,third,fourth];

    }
    render() {
        return (
            <Internship 
            website='https://www.nasdaq.com/' 
            company_name='NASDAQ' 
            logo='https://www.nasdaq.com/themes/nsdq/dist/assets/images/logo.svg'
            position='Software Engineering Intern'
            description={this.descriptions(this.props)}/>
        );
    }
}

class Visa extends Component {
    descriptions(props) {
        const first = 
        (<p className='intern-description'>
        Visa is primarily a financial services company that focuses on payment processing, 
        transaction clearing, digital technology, security, and much more. I work as a Full 
        Stack Software Engineer, revolutionizing outdated procedures into web-based applications.
      </p>);
        const second = 
        (<p className='intern-description'>
         Revamped an internal financial system, streamlining the user experience by 
         implementing features that allow seamless uploading and validation of pricing data. 
         This not only facilitated more efficient financial operations but also ensured data accuracy and compliance.
      </p>);
        const third =
        (<p className='intern-description'>
        Revitalized a widely utilized project template, refining and expanding its capabilities to 
        empower multiple teams in initiating and developing their applications.
        The enhanced starter kit became a cornerstone for various projects, fostering a standardized and 
        accelerated application development process across the organization.
      </p>);
        const fourth = 
        (<p className='intern-description'>
        Led the charge on two digital transformation initiatives aimed at eliminating manual processes 
        previously managed through Excel and email communications. The implementation of automated workflows 
        not only significantly reduced error rates but also enhanced overall process efficiency, saving time and resources.
      </p>);
        const fifth = 
        (<p className='intern-description'>
        Assumed a pivotal role in automating substantial portions of Virtual Machine (VM) management 
        and Continuous Integration/Continuous Deployment (CI/CD) processes. The automation efforts 
        contributed to heightened efficiency and reliability in development and deployment workflows, 
        enabling the team to respond swiftly to changing project requirements.
        </p>);
        const sixth = 
        (<p className='intern-description'>
        Embarked on a journey into the cutting-edge FastAPI framework, leveraging its capabilities to 
        craft a foundational backend application. The exploration of this new technology not only expanded 
        the team's skill set but also laid the groundwork for future projects, embracing modern development 
        practices and ensuring scalability and maintainability in the evolving technological landscape.
        </p>);
        const seventh = 
        (<p className='intern-description'>
        I work primarily with Angular and Spring Boot, although have delved into using Python.
        </p>
        );
      return [first,second,third,fourth, fifth, sixth, seventh];

    }
    render() {
        return (
            <Internship 
            website='https://www.visa.com/' 
            company_name='Visa'
            imgExtend='img-extend'
            logo='https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png'
            position='Software Engineer'
            description={this.descriptions(this.props)}
            rev='rev'/>
        );
    }
}

export {
    GEP,Quicket, NASDAQ, Visa
};