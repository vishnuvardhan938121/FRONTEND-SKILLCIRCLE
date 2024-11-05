import React from "react";

const Features = () => {
  return (
    <div>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 mx-auto md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Key Features of Skill Circle
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore how Skill Circle enhances community engagement, fosters
            collaboration, and simplifies skill-sharing within neighborhoods.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fas fa-pencil-alt text-3xl"></i>

              <div className="space-y-2">
                <h3 className="font-bold">Effortless Postings</h3>
                <p className="text-sm text-muted-foreground">
                  Easily create requests for assistance or showcase your skills
                  with detailed descriptions, images, and videos.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fas fa-map-marker-alt text-3xl"></i>

              <div className="space-y-2">
                <h3 className="font-bold">Personalized Local Feed</h3>
                <p className="text-sm text-muted-foreground">
                  Discover relevant requests and offers from nearby users
                  through geolocation services.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fas fa-wallet text-3xl"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Freemium Model</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy a free version with limited features or opt for a paid
                  subscription for expanded reach and functionalities.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fas fa-star text-3xl"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Reviews & Ratings</h3>
                <p className="text-sm text-muted-foreground">
                  Foster trust and ensure quality service through user-generated
                  feedback and ratings.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fas fa-money-bill-wave text-3xl"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Transaction Fees</h3>
                <p className="text-sm text-muted-foreground">
                  A small fee for paid services supports operations and
                  incentives skilled individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
