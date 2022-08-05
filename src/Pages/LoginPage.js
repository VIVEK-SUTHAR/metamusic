import { useState } from "react";
import Hero from "../components/Hero";
import useStore from "../Store/store";
import Layout from "./Layout";
import { ethers } from "ethers";

function LoginPage() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState('');
    const state = useStore();
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Please Install Metamask");
            }
            else {
                const getAccount = await ethereum.request({
                    method: 'eth_requestAccounts'
                });
                let provider = new ethers.providers.Web3Provider(ethereum, "any");
                let signer = provider.getSigner();
                let chaindId = await signer.getChainId();
                if (chaindId !== 80001) {
                    setIsWalletConnected(false)
                    signer.getChainId().then(async (res) => {
                        if (res !== 80001) {
                            const polygon = await ethereum.request({
                                method: 'wallet_switchEthereumChain',
                                params: [{ chainId: "0x13881" }]
                            })
                            const accounts = await ethereum.request({
                                method: 'eth_requestAccounts',
                            });
                            signer = provider.getSigner();
                            setCurrentAccount(accounts[0]);
                            setIsWalletConnected(true);
                            state.setCurrentAccount(accounts[0])
                            console.log(currentAccount);
                        }
                    })
                }
                if (chaindId === 80001) {
                    setIsWalletConnected(true);
                    setCurrentAccount(getAccount[0]);
                    state.setCurrentAccount(getAccount[0]);
                }
            }
        } catch (err) {
        }
    }
    return (
        !isWalletConnected ?
            (<Hero connectWallet={connectWallet} />)
            :
            (<Layout />)

    )
}

export default LoginPage