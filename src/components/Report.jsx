import React from 'react'
import Navbar from './Navbar'
import './report.css'
import '../App.css'
const Report = () => {
  return (
    <div className='container'>
        <Navbar />
        <div className='report'>
          <div className='countrySelector'>
            <h1>Select Country</h1>
            <select name="countries" id="country-select">
              <option value="">--Please choose an option--</option>
              <option value="india">India</option>
              <option value="dubai">Dubai</option>
              <option value="russia">Russia</option>
              <option value="canada">Canada</option>
              <option value="bankok">Bankok</option>
              <option value="philipines">Philipines</option>
            </select>
          </div>
          <div className='documents'>
            <h1>Document details 1</h1><button>Fetch</button>
            <h1>Document details 2</h1><button>Fetch</button>
            <h1>Document details 3</h1><button>Fetch</button>
            <h1>Document details 4</h1><button>Fetch</button>
            <h1>Document details 5</h1><button>Fetch</button>
            <h1>Document details 6</h1><button>Fetch</button>
            <h1>Document details 7</h1><button>Fetch</button>
          </div>
          <button id='compile'>Compile</button>
        </div>
    </div>
  )
}

export default Report