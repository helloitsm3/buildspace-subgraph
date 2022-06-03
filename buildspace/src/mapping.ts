import { Approval, ApprovalForAll, Claim, OwnershipTransferred, Transfer } from "../generated/Buildspace/Buildspace";
import { User } from "../generated/schema";

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleClaim(event: Claim): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
    let user = new User(event.params.tokenId.toHex());

    if (user) {
        user.owner = event.params.to.toHex();
        user.tokenId = event.params.tokenId;
        user.save();
    }
}
