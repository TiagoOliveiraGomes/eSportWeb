import { useState, useEffect, FormEvent } from "react";
import "./styles.css";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { InputForm } from "../inputForm";
import { CaretDown, Check, GameController } from "phosphor-react";
import { Game } from "../../App";
import axios from "axios";

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  function getGamesTitle() {
    return games?.map((game) => {
      return (
        <Select.Item key={game.id} className="item-select" value={game.id}>
          <Select.ItemIndicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </Select.ItemIndicator>
          <Select.ItemText>{game.title}</Select.ItemText>
        </Select.Item>
      );
    });
  }

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if(!data.name){
      return
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });
      
      alert('Anúncio criado com sucesso.')
    } catch (error) {
      alert('Erro ao criar o anúncio!')
      console.log(error)
      
    }

  }

  useEffect(() => {
    let isMount = true;
    async function getGames() {
      const response = await axios("http://localhost:3333/games");
      const data = await response.data;
      isMount && setGames(data);
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

        <form onSubmit={handleCreateAd} className="dialog-form">
          <div className="container-form-dialog">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <Select.Root name="game">
              <Select.Trigger className="container-select">
                <Select.Value placeholder="Selecione o game que deseja jogar" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content>
                  <Select.Viewport className="select-viewport">
                    {getGamesTitle()}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="container-form-dialog">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <InputForm
              name="name"
              id="name"
              placeholder="Como te chamam dentro do game"
            />
          </div>

          <div className="dialog-grid-input">
            <div className="container-form-dialog">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <InputForm
                type="number"
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser Zero"
              />
            </div>
            <div className="container-form-dialog">
              <label htmlFor="discord">Qual seu discord?</label>
              <InputForm
                name="discord"
                id="discord"
                placeholder="Usuario#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="container-form-dialog">
              <label htmlFor="weekDays">Quando costuma jogar</label>

              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Terça"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className={`ToggleGroup-Item ${
                    weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="container-form-dialog flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <InputForm
                  name="hourStart"
                  id="hourStart"
                  type="time"
                  placeholder="De"
                />
                <InputForm
                  name="hourEnd"
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="container-checkbox">
            <Checkbox.Root
              className="checkbox-root"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
