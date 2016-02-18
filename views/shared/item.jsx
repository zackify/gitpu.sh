import React from 'react'


const Item = ({ text }) => (
  <div style={styles.section}>
    <h3 style={styles.heading}>GitLab</h3>
    <div style={styles.block}>
      <img src="/img/gitlab.png" style={styles.image} />
      <span style={styles.text}>
      <pre>
        {text}
      </pre>
      </span>
      <div style={styles.time}>7 hours ago</div>
    </div>
  </div>
)

const styles = {
  section: {
    margin: '3em 0'
  },
  heading: {
    marginBottom: '1em',
    color: '#4d4d4d',
    fontWeight: 'bold'
  },
  block: {
    backgroundColor: '#fff',
    padding: '1.5em',
    borderRadius: '3px',
    boxShadow: '0 3px 3px -2px #cccccc'
  },
  image: {
    float: 'left',
    marginRight: 10
  },
  span: {
    display: 'table-cell',
    verticalAlign: 'top',
    width: '10000px !important'
  },
  time: {
    fontSize: 14
  }
}

export default Item