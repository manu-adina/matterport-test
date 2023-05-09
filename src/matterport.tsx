import React, { useEffect } from 'react';
import { MpSdk, ShowcaseBundleWindow } from "../public/mpsdk/sdk";

const modelId = "tGyWXtmhhyX";
const sdkKey = "7aut9rt179u5hssepdg2wpa5b";

interface MatterportProps {
  auth: string;
}

export default function Matterport(props: MatterportProps) {
  const { auth } = props;

  useEffect(() => {
    // Check the matterport iFrame has loaded
    const iFrame = document.getElementById("mp-embed") as HTMLIFrameElement;
    const showcaseBundle = iFrame.contentWindow as ShowcaseBundleWindow;

    if (!iFrame) return;

    const waitForSdkBundle = (done: () => void) => {
      if (showcaseBundle.MP_SDK) {
        done();
      } else {
        setTimeout(() => {
          waitForSdkBundle(done);
        }, 100); // Wait 100ms then check again
      }
    };

    /** Handling navigation between spaces, redirects you when clicking on a mattertag link
     *  and passes down mattertag link params to the next space (model id, location either the "space" or "sr" and "ss" param attributes)
     */

    const connect = () => {
      waitForSdkBundle(async () => {
        // Invoked once the SDK bundle has loaded & connected
        if (!auth) throw Error("Missing auth!");

        const sdk: MpSdk = await showcaseBundle.MP_SDK.connect(showcaseBundle, { auth });
        console.log("Connected to Matterport!");
      });
    };

    connect();
  }, []);


  const showcaseParams = new URLSearchParams();
  showcaseParams.set("m", modelId);
  showcaseParams.set("applicationKey", sdkKey);
  showcaseParams.set("apiHost", "https://my.matterport.com");
  showcaseParams.set("auth", `Bearer,${auth}`);
  showcaseParams.set("play", "1");
  showcaseParams.set("qs", "1");
  showcaseParams.set("log", "1");
  showcaseParams.set("search", "0");
  showcaseParams.set("newtags", "1");

  const iframeSrc = `${process.env.PUBLIC_URL}mpsdk/showcase.html?${showcaseParams.toString()}`;

  return(
    <>
      <iframe
        id='mp-embed'
        src={iframeSrc}
        allowFullScreen
        title='Matterport'
        style={{ height: "100%", width: "100%" }}
        frameBorder={0}
      />
    </>
  );
}
