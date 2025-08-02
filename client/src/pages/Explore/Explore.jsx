import './Explore.css';

const Explore = () => {
  return (
    <div className="explore-container text-light d-flex">
      {/* Left Column */}
      <div className="left-column d-flex flex-column">
        <div className="first-row">
          categories
        </div>
        <hr className="horizontal-line" />
        <div className="second-row" style={{ overflow: 'auto' }}>
          items
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column d-flex flex-column">
        <div className="customer-form-container" style={{ height: '15%' }}>
          customer form
        </div>

        <hr className="my-3 text-light" />

        <div className="cart-item-container" style={{ height: '55%', overflowY: 'auto' }}>
          cart items
        </div>

        <div className="cart-summary-container" style={{ height: '30%' }}>
          cart summary
        </div>
      </div>
    </div>
  );
}

export default Explore;
