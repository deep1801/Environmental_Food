import React from 'react'

 const Education11 = () => {
  return (
  //   <div style={{ position: 'relative', width: '400px', height: '300px', border: '1px solid black' }}>
  //   <div style={{ position: 'absolute', top: '100px', left: '50px', width: '100px', height: '100px', backgroundColor: 'red' }}>
  //     Absolute Div
  //   </div>
  //   <div style={{ width: '200px', height: '200px', backgroundColor: 'blue', opacity: '0.5' }}>
  //     Relative Div
  //   </div>
  // </div
  <div className="relative w-64 h-64 border border-black">
      <div className="absolute top-20 left-10 w-24 h-24 bg-red-500 border border-green-500">
        Absolute Div
      </div>
      <div className="w-48 h-48 bg-blue-500 opacity-50">
        Relative Div
      </div>
    </div>
  )
}
export default Education11