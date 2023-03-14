import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Account from '../Pages/Account';
import Billing from './Billing/Billing';
import BillingandPreference from '../Pages/BillingandPreference';
import Home from '../Pages/Home';
import Notifications from '../Pages/Notifications';
import PlanAndServices from '../Pages/PlanAndServices';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import Support from '../Pages/Support';

const Container=()=> {
  return (
    <div>
        <Routes>
            <Route path='/' index element={<Home />}/>
            <Route path='/billing' element={<Billing />}/>

            {/* <Route index element={<Account />} /> */}
            <Route path='/account'   element={<Account />}>
              <Route path='/account/profile' index element={<Profile />}/>
              <Route path='/account/billingpreference'  element={<BillingandPreference />}/>
              <Route path='/account/planandservices' element={<PlanAndServices />}/>
              <Route path='/account/settings' element={<Settings />}/>
            </Route>
            <Route path='/notifications' element={<Notifications />}/>
            <Route path='/support' element={<Support />}/>
        </Routes>
      
    </div>
  )
}

export default Container
