import styles from "./Blocks.module.css";
const list = new Array(35).fill(0);
const Blocks = () => {
  return (
    <ul className={styles.blockMain}>
      {list.map(() => {
        return <li className={styles.blocks}></li>;
      })}
    </ul>
  );
};
export default Blocks;
