/**
 * Plan type
 */
export default interface Plan {
  /**
   * Plan name, for example 'Free'
   */
  name: string;
  /**
   * Plan description, for example 'up to 10K events / mo'
   */
  description: string;
  /**
   * Plan price, for example '0$ / mo'
   */
  price: string;
  /**
   * CTA label, for example 'Get Started'
   */
  buttonText: string;

  /**
   * CTA link href
   */
  buttonHref: string;
}
