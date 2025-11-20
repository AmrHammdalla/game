"use client";
import { clearUser, setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function ConnectWallet() {
  const dispatch = useAppDispatch();
  const [connected, setConnected] = useState(false);

  const connect = () => {
    if (!connected) {
      const fakeAddress = "0x1111"; // simulate wallet
      setConnected(true);
      dispatch(setUser({ address: fakeAddress, id: 1, name: "Amr Hammdalla" }));
    } else {
      setConnected(false);
      dispatch(clearUser());
    }
  };

  return (
    <Button color="primary" onPress={connect}>
      {connected ? "Disconnect" : "Connect Wallet"}
    </Button>
  );
}
