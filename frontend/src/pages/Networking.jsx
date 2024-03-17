import React from 'react';
import DomainSearch from '../components/DomainSearch';

function HunterTools() {
  return (
    <div className='hunter-tools'>
      <h1>Connect Pro</h1>
      <p>
        Introducing ConnectPro: a cutting-edge feature within our AI Application
        Assistant, engineered to revolutionize the landscape for recruitment
        agencies and job seekers alike. ConnectPro offers an unparalleled
        advantage by enabling users to effortlessly mine detailed contact
        information and key insights about individuals currently employed at
        their target companies. This powerful tool goes beyond traditional
        networking methods, offering direct pathways to the decision-makers and
        influencers within any organization.
      </p>
      <p>
        For recruitment agencies, ConnectPro is the ultimate game-changer,
        allowing them to present their candidates directly to the right people,
        significantly increasing the likelihood of successful placements. Job
        seekers gain an unprecedented edge in the job market, armed with the
        ability to initiate personalized outreach, thus greatly enhancing their
        visibility and prospects. By delivering access to a treasure trove of
        information with just a domain search, ConnectPro not only streamlines
        the recruitment process but also transforms it into a strategic, highly
        targeted endeavor. This feature is not just about making connections;
        it's about making the right connections, faster and more efficiently
        than ever before.
      </p>
      <DomainSearch />
    </div>
  );
}

export default HunterTools;
