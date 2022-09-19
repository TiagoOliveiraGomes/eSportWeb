
import { useState, useEffect } from "react";
import "./styles.css";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";
import { InputForm } from "../inputForm";
import { CaretDown, Check, GameController } from "phosphor-react";
import { Game } from "../../App";
export function CreateAdModal() {
  const [games, setGames] = useState<string[]>([]);

  function getGamesTitle() {
      
    return (
      games?.map((title) => {
        return(
      <Select.Item className="item-select" value={title}>
        <Select.ItemText>{title}</Select.ItemText>
        <Select.ItemIndicator>
          <Check className="w-4 h-4 text-emerald-400" />
        </Select.ItemIndicator>
      </Select.Item>)}
    )
    )
  }

  useEffect(() => {
    let isMount = true;
    async function getGames() {
      const response = await fetch("http://localhost:3333/games");
      const data = await response.json();
      let gameList: string[] = [];
      data.map((game: Game) => {
        gameList.push(game.title);
      });
      isMount && setGames(gameList);
    }
    getGames();

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-Overlay" />

      <Dialog.Content className="dialog-container-content">
        <Dialog.Title className="dialog-title">
          Publique um anúncio
        </Dialog.Title>

        <form className="dialog-form">
          <div className="container-form-dialog">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <Select.Root>
              <Select.Trigger className="container-select">
                <Select.Value placeholder="Selecione o game que deseja jogar" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
              <Select.Content>
                <Select.Viewport>
                  {
                    getGamesTitle()
                  }
                </Select.Viewport>
              </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="container-form-dialog">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <InputForm id="name" placeholder="Como te chamam dentro do game" />
          </div>

          <div className="dialog-grid-input">
            <div className="container-form-dialog">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <InputForm
                type="number"
                id="yearsPlaying"
                placeholder="Tudo bem ser Zero"
              />
            </div>
            <div className="container-form-dialog">
              <label htmlFor="discord">Qual seu discord?</label>
              <InputForm id="discord" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="container-form-dialog">
              <label htmlFor="weekDays">Quando costuma jogar</label>
              <div className="grid grid-cols-4 gap-2">
                <button title="Domingo" className="w-8 h-8 rounded bg-zinc-900">
                  D
                </button>
                <button title="Segunda" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
                <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">
                  T
                </button>
                <button title="Quarta" className="w-8 h-8 rounded bg-zinc-900">
                  Q
                </button>
                <button title="Quinta" className="w-8 h-8 rounded bg-zinc-900">
                  Q
                </button>
                <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
                <button title="Sábado" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
              </div>
            </div>
            <div className="container-form-dialog flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <InputForm id="hourStart" type="time" placeholder="De" />
                <InputForm id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="container-checkbox">
            <Checkbox.Root className="checkbox-root">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
