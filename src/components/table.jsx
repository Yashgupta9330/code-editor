import React from 'react'

const Table = ({codes}) => {
console.log("table",codes)
  return (
    <>
    {codes.map((submission) => (
        <tr key={submission.id}>
          <td className='border text-center'>{submission.username}</td>
          <td style={{ maxHeight: '100px', overflowY: 'auto',whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} className='border px-4'>{submission.source_code.length > 100 ? submission.source_code.substring(0, 100) + '...' : submission.source_code}</td>
          <td className='border'>{submission.language}</td>
          <td style={{ maxHeight: '100px', overflowY: 'auto',whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} className='border'>{submission.stdin}</td>
          <td style={{ maxHeight: '100px', overflowY: 'auto',whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} className='border'>{submission.std_out}</td>
          <td className='border'>{submission.timestamp}</td>
        </tr>
      ))}
    </>
  )
}

export default Table