"use client"

import { ChannelType, MemberRole } from "@prisma/client";

import { ServerWithMemberWithProfile } from "@/types";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "member";
  channelType?: ChannelType;
  server?: ServerWithMemberWithProfile;
}
export const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: ServerSectionProps) => {
  return (
    <div>
      Server Section!
    </div>
  )
}