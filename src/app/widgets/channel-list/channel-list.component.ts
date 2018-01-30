import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channelForm: boolean;

  channels: any;

  selectedChannel: any;

  constructor(
      private channelService: ChannelService,
      private apiService: ApiService
      ) {}

  ngOnInit() {
    this.channelService.getList().subscribe(data => {
      this.getList();
    })

    this.getList();
  }

  getList() {
    this.apiService.get('channel/list').subscribe(data => {
      const sc = data[0];
      this.selectedChannel = sc.id;
      this.channelService.setChannelFilter(sc);
      this.channels = data;
    }, err => {

    })
  }

  open(e) {
    e.preventDefault();
    this.channelService.openForm();
  }

  filter(channel: any, e:any) {
    e.preventDefault();
    //console.log(name)
    this.selectedChannel = channel.id;
    this.channelService.setChannelFilter(channel);
  }


}
