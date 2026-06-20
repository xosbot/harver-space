import MarketChart from "./MarketChart";

const Market = () => {
  const sectionStyle = {
    backgroundColor: 'var(--void)',
    color: 'var(--text-primary, #ffffff)',
    padding: '8rem 2rem',
    fontFamily: 'var(--font-sans, sans-serif)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const labelStyle = {
    display: 'block',
    color: 'var(--accent, #00f0ff)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '700',
    lineHeight: '1.1',
    margin: '0 0 4rem 0',
    background: 'linear-gradient(90deg, var(--text-primary, #fff) 0%, var(--text-secondary, #aaa) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    marginBottom: '6rem',
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '2.5rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const accentLineStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, var(--accent, #00f0ff), transparent)',
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: 'var(--text-secondary, #cccccc)',
  };

  const growthContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.5rem',
  };

  const currentValueStyle = {
    fontSize: '1.5rem',
    fontWeight: '500',
    opacity: 0.7,
  };

  const arrowStyle = {
    color: 'var(--accent, #00f0ff)',
    fontSize: '1.5rem',
  };

  const projectedValueStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--accent, #00f0ff)',
  };

  const cagrStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary, #aaaaaa)',
    marginTop: '1rem',
  };

  const competitorSectionStyle = {
    marginTop: '6rem',
  };

  const subHeadingStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '3rem',
  };

  const competitorGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  };

  const competitorCardStyle = {
    ...cardStyle,
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const competitorNameStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const competitorAmountStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(90deg, var(--accent, #00f0ff), var(--accent-secondary, #7000ff))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const competitorLabelStyle = {
    fontSize: '0.875rem',
    color: 'var(--text-secondary, #aaaaaa)',
    marginTop: '0.25rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <span style={labelStyle}>MARKET INTELLIGENCE</span>
        <h2 style={headingStyle}>The Space Economy</h2>

        <div style={gridStyle}>
          {/* ADR Card */}
          <div style={cardStyle} className="glass-panel">
            <div style={accentLineStyle} />
            <h3 style={cardTitleStyle}>ADR Market</h3>
            <div style={growthContainerStyle}>
              <span style={currentValueStyle}>$671M</span>
              <span style={arrowStyle}>→</span>
              <span style={projectedValueStyle}>$3.5B</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>by 2035</div>
            <div style={cagrStyle}>CAGR 17.9%</div>
          </div>

          {/* WPT Card */}
          <div style={cardStyle} className="glass-panel">
            <div style={accentLineStyle} />
            <h3 style={cardTitleStyle}>WPT Market</h3>
            <div style={growthContainerStyle}>
              <span style={currentValueStyle}>$16.4B</span>
              <span style={arrowStyle}>→</span>
              <span style={projectedValueStyle}>$105B</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>by 2035</div>
            <div style={cagrStyle}>CAGR 20.4%</div>
          </div>

          {/* SBSP Card */}
          <div style={cardStyle} className="glass-panel">
            <div style={accentLineStyle} />
            <h3 style={cardTitleStyle}>SBSP Market</h3>
            <div style={growthContainerStyle}>
              <span style={currentValueStyle}>$131M</span>
              <span style={arrowStyle}>→</span>
              <span style={projectedValueStyle}>$543M</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>by 2035</div>
            <div style={cagrStyle}>CAGR 17.1%</div>
          </div>
        </div>

        {/* Market Growth Chart */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <MarketChart />
        </div>

        <div style={competitorSectionStyle}>
          <h3 style={subHeadingStyle}>Competitive Landscape</h3>
          <div style={competitorGridStyle}>
            <div style={competitorCardStyle}>
              <div style={accentLineStyle} />
              <div>
                <div style={competitorNameStyle}>Astroscale</div>
                <div style={competitorLabelStyle}>Total Funding Raised</div>
              </div>
              <div style={competitorAmountStyle}>$383M</div>
            </div>

            <div style={competitorCardStyle}>
              <div style={accentLineStyle} />
              <div>
                <div style={competitorNameStyle}>ClearSpace</div>
                <div style={competitorLabelStyle}>Total Funding Raised</div>
              </div>
              <div style={competitorAmountStyle}>€110M</div>
            </div>

            <div style={competitorCardStyle}>
              <div style={accentLineStyle} />
              <div>
                <div style={competitorNameStyle}>D-Orbit</div>
                <div style={competitorLabelStyle}>Total Funding Raised</div>
              </div>
              <div style={competitorAmountStyle}>$166M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
