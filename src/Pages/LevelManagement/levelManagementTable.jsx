import { useSelector } from 'react-redux';
import styles from './levelmanagement.module.css'
import LevelManagementItems from './LevelManagementItems'

function LevelmanagementTable() {
  // const dispatch = useDispatch();

  const { allLevels } = useSelector((state) => state.LevelManagementStore);

  // console.log("from lmt", allLevels)

  return (
    <>
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td className={styles.td}>
              Level
            </td>
            <td className={styles.td}>
              Description
            </td>
            <td className={styles.td}>
              Salary <span>per month</span> (<span id="selectCurrency"></span>)
            </td>
            <td className={styles.td}>
              Action
            </td>
          </tr>
        </thead>

        <tbody>
          {/* {displayLevels} */}
          {allLevels ? allLevels.map((level, index) => {
            /* console.log("from lmt map", level); */
            const { title, description, salary, id } = level;
            /* console.log(title, description, salary) */
            /* console.log(typeof level.title) */
            return <LevelManagementItems
              key={index}
              index={index + 1}
              id={id}
              title={title ? title : "no title found"}
              description={description ? description : "no description found"}
              salary={salary ? salary : "no salary found"} />
          }) : "No levels to load"}

        </tbody>
      </table>
      </div>
    </>
  )

}

export default LevelmanagementTable