import React from "react";
import H4 from "../shared/h4";
import H2 from "../shared/h2";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import BtnV1 from "../ui/btn-v1";
import Popover from "../ui/motion-popover";
import ToolbarExpandable from "../ui/motion-toolbar";
import FamilyPopoverMenu from "../ui/motion-tool-popover";

type Props = {};

export default function Login({}: Props) {
  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div> */}

      {/* <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div> */}
      <div className="flex justify-center flex-col items-center min-h-[calc(100vh-80px)] gap-7">
        <div className="relative">
          <H2 className="text-6xl">
            <span className="bg-gradient-to-b from-violet-300 via-violet-400 to-violet-800 text-transparent bg-clip-text">
              Great to see you again
            </span>
          </H2>
        </div>
        <div className="w-[30%] flex flex-col gap-6 py-8">
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter your password" type="password" />
          <div className="flex gap-5">
            <Button variant="outline">Forgot Password</Button>
            <Button variant="outline">Sign up</Button>
            <Button className="w-full">Log in</Button>
          </div>
        </div>
        {/* <FamilyPopoverMenu /> */}
      </div>
    </div>
  );
}
