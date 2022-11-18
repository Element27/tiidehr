import React from 'react'

function RoleTabletr({ classname, groupName, title }) {
  return (
    <tr className={classname}>
      <td>{title}</td>
      <td>{<input type="checkbox" value="canCreate" name={groupName} />}</td>
      <td>{<input type="checkbox" value="canView" name={groupName} />}</td>
      <td>{<input type="checkbox" value="canEdit" name={groupName} />}</td>
      <td>{<input type="checkbox" value="canDelete" name={groupName} />}</td>
    </tr>
  )
}

export default RoleTabletr