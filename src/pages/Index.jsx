import Layout from '../components/Layout';
import '../styles/main.scss'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <Layout className="App">
      <main>
        <div>
          <div>
            <div>
              <h1>Work With Our Vetted Elite Latin American Remote Developers</h1>
              <p className="text-secondary">
                Work with our hand selected and rigorously vetted <span className="highlight">Elite Latin American</span> remote talent, assigned to you in <span className="highlight">24 hours</span>.
              </p>
            </div>
            <div>
              <form action="#">
                <div>
                  <Link to='/connect/'>
                    <Button variant="contained" color="primary">
                      Hire Now
                    </Button>
                  </Link>
                </div>
              </form>
              <div>
                <span>
                  Do you have what it takes to be a
                        CloudDevs talent&nbsp; ?&nbsp;
                  <Link to="/apply/">Apply here</Link>
                </span>
              </div>
              <div>
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=187096&theme=light&period=weekly" alt="product week" />
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <Link to="review">
                <figure>
                  <img src="https://d2i72aaxtbe17r.cloudfront.net/wp-content/uploads/2020/04/trustpilot-stacked-asset.svg" alt="star" />
                </figure>
              </Link>
              <Link to="review">
              <p><span>5 out of 5 stars</span> from 100s of reviews.</p>
              </Link>
            </div>
            <div>
              <Link to="review">
                <figure>
                  <img src="https://d2i72aaxtbe17r.cloudfront.net/wp-content/uploads/2020/04/img2-1.png" alt="star" />
                </figure>
              </Link>
              <Link to="review">
                <p>More than <span>8,000 +</span> Developers
                and Designers in our pre-vetted pool.</p>
              </Link>
            </div>
            <div>
              <Link to="review">
                <figure>
                  <img src="https://d2i72aaxtbe17r.cloudfront.net/wp-content/uploads/2020/ezgif.com-rotate.gif" alt="star" />
                </figure>
              </Link>
              <Link to="review">
                <p>Over <span>$15 million</span> worth of
                projects completed.</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <h1>Pay only for the time the job takes</h1>
              <p className="text-secondary">
                We charge a transparent rate of <span
                  className="highlight"> $40-50/ hour</span>. Hiring an elite senior Latin American developer with us will
                <span className="highlight">save you 60% to 50%</span> in cost compared to hiring a developer locally or
                through Toptal.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <span>
                      <span>$</span>
                      <span>40-60</span>
                      <span>/ hour !</span>
                      <span>Our rate for Elite Latin American Senior Engineers
                      <br /></span>
                      <hr className="opacity-md my-4" />
                        <div className="mb-5">
                          <p>Average 7+ years of senior level experience </p>
                        </div>
                        <div className="d-inline-block"><a href="https://clouddevs.com/connect/">
                          <div className="fgb-button--inner">Hire Now</div>
                          <span
                            className="fas fa-arrow-right text-primary font-size-1 ml-2 ml-sm-2 ml-sm-1"></span>
                        </a></div>
                        <p className="small text-white-70"> Hire now with a 7 day risk free trial! </p>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <h4>
                      <span>
                        <strong>Average competitor rate :</strong>
                      </span>
                    </h4>
                    <p>Senior developer</p>
                  </div>
                  <div>
                    <span>$100+</span>
                    <span>hour</span>
                  </div>
                  <div>
                    <h4><span><strong>
                      Your average local freelancer rate:
                    </strong></span></h4>
                    <p>Mid to Senior developers</p>
                  </div>
                  <div>
                    <span>$80+</span>
                    <span>hour</span>
                  </div>
                </div>
              </div>
              <div>
                <p>Need on-site services ?
                <a
                  href="https://clouddevs.com/connect/">Contact us for custom pricing</a>
                </p>
              </div>
            </div>
            <div>
              <figure>
                <img src="//d2i72aaxtbe17r.cloudfront.net/wp-content/plugins/wp-fastest-cache-premium/pro/images/blank.gif" alt="test" />
              </figure>
              <h4>Talents are assigned under 24 hours</h4>
              <p>Within 24 hours you’ll be ready to start
              working with your matched talent via your dedicated Slack workspace!<br /><br /></p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
