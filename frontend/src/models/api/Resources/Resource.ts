export class Resource {
    logoTitle: string;
    homePage: string;
    reviewPage: string;
    innovationLeader: string;
    getStarted: string;
    shopMeal: string;
    productDetails: string;
    compare: string;
    readMore: string;
    email: string;
    phone: string;
    notAvailablePhone: string;
    readAllReviews: string;
    hideReviews: string;
    leaveReview: string;
    reviewFormTitle: string;
    comment: string;
    name: string;
    phoneOptional: string;
    saveAsContent: string;
    postReview: string;
    errorPage: string;

  constructor(data: any) {
    this.logoTitle = data?.logoTitle || "";
    this.homePage = data?.homePage || "";
    this.reviewPage = data?.reviewPage || "";
    this.innovationLeader = data?.innovationLeader || "";
    this.getStarted = data?.getStarted || "";
    this.shopMeal = data?.shopMeal || "";
    this.productDetails = data?.productDetails || "";
    this.compare = data?.compare || "";
    this.readMore = data?.readMore || "";
    this.email = data?.email || "";
    this.phone = data?.phone || "";
    this.notAvailablePhone = data?.notAvailablePhone || "";
    this.readAllReviews = data?.readAllReviews || "";
    this.hideReviews = data?.hideReviews || "";
    this.leaveReview = data?.leaveReview || "";
    this.reviewFormTitle = data?.reviewFormTitle || "";
    this.comment = data?.comment || "";
    this.name = data?.name || "";
    this.phoneOptional = data?.phoneOptional || "";
    this.saveAsContent = data?.saveAsContent || "";
    this.postReview = data?.postReview || "";
    this.errorPage = data?.errorPage || "";
  }
}
