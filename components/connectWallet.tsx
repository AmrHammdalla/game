"use client";
import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function ConnectWallet() {
  const dispatch = useAppDispatch();
  const [connected, setConnected] = useState(false);

  const connect = () => {
    const fakeAddress = "0x1111"; // simulate wallet
    setConnected(true);
    dispatch(setUser({ address: fakeAddress, id: 1, name: "Amr Hammdalla" }));
  };

  return (
    <Button color="primary" onPress={connect}>
      {connected ? "Wallet Connected" : "Connect Wallet"}
    </Button>
  );
}
